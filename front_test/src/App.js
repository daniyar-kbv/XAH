import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from './constants/actionTypes'

const getArticlesApi = () => (
    fetch(
        'http://localhost:8000/articles',
        {
          method: 'GET'
        }
    )
);

function createArticleApi(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native Javascript objects
}

const getArticles = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_ARTICLES_STARTED
  });

  getArticlesApi().then(
      response => {
          response.text().then(
              value => {
                  const articles = JSON.parse(value);
                  dispatch({
                      type: actionTypes.ACTION_GET_ARTICLES_SUCCESS,
                      articles
                  })
              }
          )
      }
  )
};

const createArticle = (data) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.ACTION_POST_ARTICLES_STARTED
    });

    createArticleApi(`http://localhost:8000/articles`, {
        name: document.getElementById('input').value
    })
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
};

class App extends Component{
  constructor(props){
      super(props);
      this.handleCreateArticle = this.handleCreateArticle.bind(this);
  }

  componentDidMount() {
    this.props.getArticles();
  }

  handleCreateArticle(){
      let data = {
          name: document.getElementById('input')
      };
      this.props.createArticle(data);
      this.props.getArticles();
      console.log(this.props.articles);
  }

  render() {
      return(
          <div>
              { this.props.articles.map(article =>
                  <div className='article-block' key={article._id}>
                      <h1>{article.name}</h1>
                  </div>
              )}
              <input type='text' id='input'/>
              <button onClick={this.handleCreateArticle}>submit</button>
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
    articles: state.article.articles
});

const mapDispatchToProps = {
    getArticles: getArticles,
    createArticle: createArticle
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
