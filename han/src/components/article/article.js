import React, { Component } from 'react';
import './article.css';
import '../../assets/css/theme.css'
import incard from '../../assets/img/graphic-product-bench-thumb.jpg'
import bigimage from '../../assets/img/photo-woman-writing.jpg'
import commentimage from '../../assets/img/avatar-female-2.jpg'

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

class Comment extends Component{
    render(){
        return(
            <li class="list-group-item py-4">
                <div class="media">
                    <img alt="Image" src={commentimage} class="avatar avatar-sm" />
                    <div class="media-body">
                        <div class="mb-2">
                            <span class="h6 mb-0">Kelly Fraiser</span>
                            <span class="text-muted">Making awesome products</span>
                        </div>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <div class="d-flex align-items-center">
                            <div class="mr-2">
                                <button class="btn btn-sm btn-outline-primary">Reply</button>
                                <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>&nbsp;(2)</button>
                            </div>
                            <small class="text-muted">1st Dec 2017 • 10:15am</small>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

class Article extends Component {
  render() {
    return (
        <div>
            <section class="bg-white space-sm">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col">
                            <div class="media align-items-center">
                                <div class="media-body">
                                    <h1 class="display-4">Starting Up - A Candid Documentary</h1>
                                    <span class="lead">What it’s really like trying to convert an idea into a business.</span>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-secondary mr-3">Business</span>
                                        <span class="badge badge-secondary mr-3">Lifestyle</span>
                                        <ul class="list-inline text-small d-inline-block">
                                            <li class="list-inline-item"><i class="icon-thumbs-up"></i> 214</li>
                                            <li class="list-inline-item"><i class="icon-message"></i> 6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="space-sm">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-12 col-md-8 col-lg-7">
                            <figure class="figure">
                                <img alt="Image" src={bigimage} class="img-fluid figure-img" />
                                <figcaption class="figure-caption">Figure one: Mission Control panel</figcaption>
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
                            <h5 class="mb-4">Discussion</h5>
                            <div class="card">
                                <div class="card-header bg-secondary d-flex justify-content-between">
                                    <button class="btn btn-secondary" type="button" data-target="#comment-reply" data-toggle="collapse" aria-expanded="false" aria-controls="comment-reply">Leave a comment</button>
                                    <form class="d-flex align-items-center">
                                        <span class="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                                        <select class="custom-select">
                                            <option value="alpha">Alphabetical</option>
                                            <option value="old-new" selected>Newest</option>
                                            <option value="new-old">Popular</option>
                                            <option value="recent">Recently Updated</option>
                                        </select>
                                    </form>
                                </div>
                                <div class="collapse" id="comment-reply">
                                    <form class="card-body">
                                        <div class="form-group">
                                            <textarea class="form-control from-control-lg" id="comment-reply-text" name="comment-reply" rows="4" placeholder="Type your comment here"></textarea>
                                        </div>
                                        <div class="mb-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" name="notify-reply" id="check-notify"/>
                                                <label class="custom-control-label text-small" for="check-notify">Notify me when someone replies</label>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <button type="submit" class="btn btn-success mr-3">Submit comment</button>
                                            <a href="#comment-reply" class="text-small text-muted" data-toggle="collapse" aria-expanded="true" aria-controls="comment-reply">Cancel</a>
                                        </div>
                                    </form>
                                </div>
                                <ul class="list-group list-group-flush list-group-comments">
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <div><i class="icon-text-document mr-1"></i> Created</div>
                                            <span>17/11/2017</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <div><i class="icon-edit mr-1"></i> Last updated</div>
                                            <span>23/12/2017</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <div><i class="icon-thumbs-up mr-1"></i> Likes</div>
                                            <span>214</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                            <div><i class="icon-share mr-1"></i> Shares</div>
                                            <span>52</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card">
                                    <div class="card-header d-flex justify-content-between">
                                            <div>
                                                <span class="h6">Your Ads here</span>
                                            </div>
                                        </div>
                                <img class="ad w-100 h-100" src="assets/img/graphic-product-kin.jpg" alt=""/>
                            </div>
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <div>
                                        <span class="h6">Related Articles</span>
                                    </div>
                                    <a href="#">View all &rsaquo;</a>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled list-spacing-sm">

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

export default Article;