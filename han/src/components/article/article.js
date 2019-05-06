import React, { Component } from 'react'
import './article.css'
import '../../assets/css/theme.css'
import incard from '../../assets/img/graphic-product-bench-thumb.jpg'
import bigimage from '../../assets/img/photo-woman-writing.jpg'
import * as articleActions from '../../actions/articleActions' 
import { connect } from 'react-redux'
import Comment from './comment'

class PostInCard extends Component{
    render(){
        return(
            <li>
                <div className="media">
                    <a href="#">
                        <img alt="Image" src={incard} className="avatar avatar-square rounded mr-3" />
                    </a>
                    <div className="media-body">
                        <a href="#">
                            <span className="h6">Bench</span>
                        </a>
                        <span className="badge badge-secondary">Productivity</span>
                        <div className="text-muted">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <small><i className="icon-heart"></i> 373</small>
                                </li>
                                <li className="list-inline-item">
                                    <small><i className="icon-message"></i> 62</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

class Article extends Component {

    componentDidMount() {
        this.props.getArticles();
        console.log(this.props.articles);
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
                                    <h1 className="display-4">Starting Up - A Candid Documentary</h1>
                                    <span className="lead">What it’s really like trying to convert an idea into a business.</span>
                                    <div className="d-flex align-items-center">
                                        <span className="badge badge-secondary mr-3">Business</span>
                                        <span className="badge badge-secondary mr-3">Lifestyle</span>
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
                                <img alt="Image" src={bigimage} className="img-fluid figure-img" />
                                <figcaption className="figure-caption">Figure one: Mission Control panel</figcaption>
                            </figure>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <a href="#">labore et dolore</a> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit
                                </p>
                                <p>
                                    Rerum facilis est et expedita distinctio. Nam
                                    <abbr title="Hyper Text Markup Language">HTML</abbr>tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
                                    officiis debitis aut rerum necessitatibus saepe eveniet ut.
                                </p>
                                <ul>
                                    <li>
                                        Temporibus autem quibusdam
                                    </li>
                                    <li>
                                        Saepe eveniet ut et voluptates repudiandae sint
                                    </li>
                                    <li>
                                        Nemo enim ipsam voluptatem quia voluptas
                                    </li>
                                    <li>
                                        Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                                    </li>
                                </ul>
                            </article>
                            <hr/>
                            <h5 className="mb-4">Discussion</h5>
                            <Comment/>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div><i className="icon-text-document mr-1"></i> Created</div>
                                            <span>17/11/2017</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div><i className="icon-edit mr-1"></i> Last updated</div>
                                            <span>23/12/2017</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div><i className="icon-thumbs-up mr-1"></i> Likes</div>
                                            <span>214</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div><i className="icon-share mr-1"></i> Shares</div>
                                            <span>52</span>
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
                                <img className="ad w-100 h-100" src="assets/img/graphic-product-kin.jpg" alt=""/>
                            </div>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div>
                                        <span className="h6">Related Articles</span>
                                    </div>
                                    <a href="#">View all &rsaquo;</a>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled list-spacing-sm">

                                        <PostInCard/>
                                        <PostInCard/>
                                        <PostInCard/>
                                        <PostInCard/>

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
    articles: state.article.articles,
});

const mapDispatchToPropsArticle = {
    getArticles: articleActions.getArticles,
}

export default connect(
    mapStateToPropsArticle,
    mapDispatchToPropsArticle
)(Article);