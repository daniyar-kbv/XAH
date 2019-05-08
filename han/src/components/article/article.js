import React, { Component } from 'react'
import './article.css'
import '../../assets/css/theme.css'
import bigimage from '../../assets/images/b1.jpg'
import * as articleActions from '../../actions/articleActions'
import { connect } from 'react-redux'
import Comments from '../comment/comment'
import PostInCard from '../postincard/postInCard'
import { Image } from 'react-bootstrap'

class Article extends Component {

    componentDidMount() {
        const {articleId} = this.props.location.state
        this.props.getArticle(articleId)
    }

    render() {
        return (
            <div>
                <section className="bg-white space-sm">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col">
                                <div className="media align-items-center">
                                    <div className="media-body">
                                        <h1 className="display-4">{this.props.article.title}</h1>
                                        <div className="d-flex align-items-center">
                                            <span className="badge badge-secondary mr-3">Business</span>
                                            <ul className="list-inline text-small d-inline-block">
                                                <li className="list-inline-item"><i className="icon-thumbs-up"></i> 214</li>
                                                <li className="list-inline-item"><i className="icon-message"></i> 6</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-sm">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-md-8 col-lg-7">
                                <figure className="figure">
                                    <Image className="img-fluid figure-img" src={bigimage} />
                                </figure>
                                <article>
                                    <p>
                                        {this.props.article.title}
                                    </p>
                                </article>
                                <hr />
                                <h5 className="mb-4">Discussion</h5>
                                <Comments />
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <div><i className="icon-text-document mr-1"></i> Created</div>
                                                <span>{this.props.article.createdAt}</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <div><i className="icon-edit mr-1"></i> Last updated</div>
                                                <span>{this.props.article.updatedAt}</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <div><i className="icon-thumbs-up mr-1"></i> Likes</div>
                                                <span>214</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <div>
                                            <span className="h6">Your Ads here</span>
                                        </div>
                                    </div>
                                    <img className="ad w-100 h-100" src="assets/img/graphic-product-kin.jpg" alt="" />
                                </div>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <div>
                                            <span className="h6">Related Articles</span>
                                        </div>
                                        <p>View all &rsaquo;</p>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled list-spacing-sm">

                                            <PostInCard />
                                            <PostInCard />
                                            <PostInCard />
                                            <PostInCard />

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToPropsArticle = (state) => ({
    article: state.article.article
});

const mapDispatchToPropsArticle = {
    getArticle: articleActions.getArticle,
}

export default connect(
    mapStateToPropsArticle,
    mapDispatchToPropsArticle
)(Article);