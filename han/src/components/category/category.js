import React, { Component } from 'react';
import './category.css';
import '../../assets/css/theme.css'
import * as articleActions from '../../actions/articleActions';
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
// import * as images from '../../assets/images'
// import * as functions from '../../helpFunctions'
import { Link } from 'react-router-dom'

class Category extends Component {

    componentDidMount() {
        const { categoryId } = this.props.match.params
        this.props.getArticlesByCat(categoryId)
    }

    render() {
        return (
            <div className='container mt-5 mb-5'>
                {this.props.articles.map(article =>
                    <Link to={`/article/${article._id}`} key={article._id}>
                        <li className="row align-items-center justify-content-around mb-5">
                            <div className="col-12 col-md-6 order-md-2">
                                <Image className="img-fluid rounded" src={require('../../assets/images/b1.jpg')} />
                            </div>
                            <div className="col-12 col-md-6 col-lg-5 text-lg-center order-md-1">
                                <h3 className="h1">{article.title}</h3>
                                <p className="lead">
                                    {article.body.substring(0, 100)}
                                </p>
                                <p>Compare plans and featur</p>
                            </div>
                        </li>
                    </Link>
                )}
            </div>
        );
    }
}

const mapStateToPropsComment = (state) => ({
    articles: state.article.articlesByCat
})

const mapDispatchToPropsComment = {
    getArticlesByCat: articleActions.getArticlesByCat,
}

export default connect(
    mapStateToPropsComment,
    mapDispatchToPropsComment
)(Category);