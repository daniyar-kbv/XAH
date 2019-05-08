import React, { Component } from 'react';
import '../mainpage/main.css';
import '../../assets/css/theme.css';
import magazines from '../mainpage/images/magazines.jpg';
import nazik from '../mainpage/images/Nazik.jpg';
import oscar from '../mainpage/images/oscar.jpg';
import { Link } from "react-router-dom";
import * as functions from '../../helpFunctions'
import * as articleActions from '../../actions/articleActions'
import { connect } from 'react-redux'
import * as images from '../../assets/images'

class Hotnews extends Component{

    componentDidMount() {
        this.props.getArticles()
        console.log(magazines)
    }

    render(){
        return(
            <div className="row mt-5 ml-1 mr-1" id="hot-news">
                <div className="col-6 col-sm-6 col-lg-6 shadow-box-big p-0 image-in" style={functions.image(images.b1)}>
                    <Link to={{ pathname: './article', state: { articleId: this.props.firstBusinessArticle._id} }}>
                        <div className="d-flex align-items-end flex-column h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 mb-2 text-center cat-text">
                                        Авто
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
                    <div className="row h-50 h-50 shadow-box-small image-in" style={functions.image(nazik)}>
                        <div className="d-flex align-content-between flex-wrap h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 mb-2 text-center cat-text">Авто</p>
                                </div>
                            </div>
                            <div className="mt-auto p-2 bd-highlight">
                                <p className="m-1 text-left hot-new-text-white hot-new-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="row h-50 h-50 shadow-box-small image-in" style={functions.image(oscar)}>
                        <div className="d-flex align-content-between flex-wrap h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 mb-2 text-center cat-text">Авто</p>
                                </div>
                            </div>
                            <div className="mt-auto p-2 bd-highlight">
                                <p className="m-1 text-left hot-new-text-white hot-new-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToPropsArticle = (state) => ({
    articles: state.article.articles,
    firstBusinessArticle: state.article.firstBusinessArticle
});

const mapDispatchToPropsArticle = {
    getArticles: articleActions.getArticles,
}

export default connect(
    mapStateToPropsArticle,
    mapDispatchToPropsArticle
)(Hotnews);