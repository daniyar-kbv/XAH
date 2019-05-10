import React, { Component } from 'react';
import './category.css';
import '../../assets/css/theme.css'
import * as articleActions from '../../actions/articleActions';
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
import asd from '../../assets/images/b1.jpg'
import * as functions from '../../helpFunctions'

class Category extends Component {

    componentDidMount() {
        const { categoryId } = this.props.match.params
        this.props.getArticlesByCat(categoryId)
    }

    render() {
        return (
            <div className='container mt-5 mb-5'>
                {/* <div className="all-posts">
                    {this.props.articles.map(article =>
                        <div className="post mb-5">
                            <div className="post-img">
                                <img src="https://tengrinews.kz/userdata/news/2019/news_364155/thumb_xm/photo_273822.jpg" alt="img" />
                            </div>
                            <div className="post-word">
                                <div className="post-date">
                                    <p>28.02.2019</p>
                                </div>
                                <h2>{article.title}</h2>
                                <p className="post-text">{article.body}</p>
                                <p className="read-more">Читать далее</p>
                            </div>
                        </div>
                    )}
                </div> */}
                <li className="row align-items-center justify-content-around">
                    <div className="col-12 col-md-6 order-md-2">
                        {/* <Image className="img-fluid rounded" source={require('../../assets/images/b1.jpg')}/> */}
                        <Image className="img-fluid rounded" source={require('../../assets/images/b1.jpg')}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 text-lg-center order-md-1">
                        <i className="icon-folder-music text-teal display-3"></i>
                        <h3 className="h1">It's everything in one place</h3>
                        <p className="lead">
                            A robust suite of styled components, powered by Bootstrap 4.  Take the design of your website or webapp up a notch.
                        </p>
                        <p>Compare plans and featur</p>
                    </div>
                </li>
                {/* <div className='right__images'>
                    <p>
                        <img src="https://www.liat.com/UserFiles/Image/adspecs.jpg" alt="Реклама" />
                    </p>
                    <p className='link'>Реклама на сайте</p>
                </div> */}
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