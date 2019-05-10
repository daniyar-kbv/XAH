import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import Category from '../src/components/category/category'
import Article from '../src/components/article/article'
import Mainpage from './components/mainpage/main'
import Registration from './components/registration/registration'
import Login from './components/login/login'
import articleCreate from './components/artclecreate/articleCreate'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" exact component={Mainpage}></Route>
                <Route path="/category/:categoryId" exact component={Category}></Route>
                <Route path="/article/:articleId" exact component={Article}></Route>
                <Route path="/registration" exact component={Registration}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/post" exact component={articleCreate}></Route>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
