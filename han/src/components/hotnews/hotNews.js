import React, { Component } from 'react';
import '../mainpage/main.css';
import '../../assets/css/theme.css';
// import magazines from '../mainpage/images/magazines.jpg';
// import nazik from '../mainpage/images/Nazik.jpg';
// import oscar from '../mainpage/images/oscar.jpg';
import { Link } from "react-router-dom";
import * as functions from '../../helpFunctions'
import * as articleActions from '../../actions/articleActions'
import { connect } from 'react-redux'
import * as images from '../../assets/images'
import * as categoryActions from '../../actions/categoryActions'

function ifNotUndefined(obj) {
    if (obj) return obj
    else return ''
}

class Hotnews extends Component {

    componentDidMount() {
        this.props.getArticles()
        this.props.getCategories()
    }

    render() {
        return (
            <div className="row mt-5 ml-1 mr-1" id="hot-news">
            {console.log(this.props.firstBusinessArticle.title)}
                <div className="col-6 col-sm-6 col-lg-6 shadow-box-big p-0 image-in" style={{ backgroundImage: "url(" + require('../../assets/images/b1.jpg') + ")"}}>
                    <Link to={`/article/${this.props.firstBusinessArticle._id}`}>
                        <div className="d-flex align-items-end flex-column h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 mb-2 text-center cat-text">
                                        {ifNotUndefined(this.props.categories.find(category => category._id === this.props.firstBusinessArticle.category)).name}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-auto p-2 bd-highlight">
                                <p className="m-1 text-left hot-new-text hot-new-text-white image-in">{this.props.firstBusinessArticle.title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-sm-6 col-lg-6">
                    <Link to={`/article/${this.props.firstAutoArticle._id}`}>
                        <div className="row h-50 h-50 shadow-box-small image-in" style={functions.image(images.a1)}>
                            <div className="d-flex align-items-end flex-column h-100 w-100">
                                <div className="ml-auto d-flex cat-box">
                                    <div className="bg-dark w-100">
                                        <p className="mt-2 mb-2 text-center cat-text">
                                            {ifNotUndefined(this.props.categories.find(category => category._id === this.props.firstAutoArticle.category)).name}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto p-2 bd-highlight">
                                    <p className="m-1 text-left hot-new-text-white hot-new-text-small">{this.props.firstAutoArticle.title}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="w-100"></div>
                    <Link to={`/article/${this.props.firstSportArticle._id}`}>
                        <div className="row h-50 h-50 shadow-box-small image-in" style={functions.image(images.s1)}>
                            <div className="d-flex align-items-end flex-column h-100 w-100">
                                <div className="ml-auto d-flex cat-box">
                                    <div className="bg-dark w-100">
                                        <p className="mt-2 mb-2 text-center cat-text">
                                        {ifNotUndefined(this.props.categories.find(category => category._id === this.props.firstSportArticle.category)).name}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto p-2 bd-highlight">
                                    <p className="m-1 text-left hot-new-text-white hot-new-text-small">{this.props.firstSportArticle.title}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToPropsArticle = (state) => ({
    articles: state.article.articles,
    firstBusinessArticle: state.article.firstBusinessArticle,
    firstAutoArticle: state.article.firstAutoArticle,
    firstSportArticle: state.article.firstSportArticle,
    categories: state.category.categories
});

const mapDispatchToPropsArticle = {
    getArticles: articleActions.getArticles,
    getCategories: categoryActions.getCategories
}

export default connect(
    mapStateToPropsArticle,
    mapDispatchToPropsArticle
)(Hotnews);