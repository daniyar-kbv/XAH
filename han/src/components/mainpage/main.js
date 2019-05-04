import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './main.css';
import '../../assets/css/theme.css';
import magazines from './images/magazines.jpg';
import nazik from './images/Nazik.jpg';
import oscar from './images/oscar.jpg';
import incard from '../../assets/img/graphic-product-bench-thumb.jpg';
import ad1 from './images/landrover.png';
import ad2 from './images/ipo.png';
import othernewscardimg from './images/x-trail.jpg';
import { BrowserRouter as Link } from "react-router-dom";

class Hotnews extends Component{
    render(){
        return(
            <div class="row mt-5 ml-1 mr-1" id="hot-news">
                <div className="col-6 col-sm-6 col-lg-6 shadow-box-big p-0 image-in" style={image(magazines)}>
                    <Link to={'./article'}>
                        <div className="d-flex align-content-between flex-wrap h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 mb-2 text-center cat-text">
                                        <a>Авто</a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-auto p-2 bd-highlight">
                                <p className="m-1 text-left hot-new-text hot-new-text-white image-in">Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="col-6 col-sm-6 col-lg-6">
                    <div class="row h-50 h-50 shadow-box-small image-in" style={image(nazik)}>
                        <div class="d-flex align-content-between flex-wrap h-100">
                            <div class="ml-auto d-flex cat-box">
                                <div class="bg-dark w-100">
                                    <p class="mt-2 mb-2 text-center cat-text">Авто</p>
                                </div>
                            </div>
                            <div class="mt-auto p-2 bd-highlight">
                                <p class="m-1 text-left hot-new-text-white hot-new-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="row h-50 h-50 shadow-box-small image-in" style={image(oscar)}>
                        <div class="d-flex align-content-between flex-wrap h-100">
                            <div class="ml-auto d-flex cat-box">
                                <div class="bg-dark w-100">
                                    <p class="mt-2 mb-2 text-center cat-text">Авто</p>
                                </div>
                            </div>
                            <div class="mt-auto p-2 bd-highlight">
                                <p class="m-1 text-left hot-new-text-white hot-new-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function image(url){
    var style = {
        backgroundImage: 'url(' + url + ')'
    };
    return style;
}

class SmallHotInCat extends Component{
    render(){
        return(
            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style={image(this.props.url)}>
                {/* <Image className="bg-image bg" src={oscar} alt="Image"/> */}
                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
            </div>
        );
    }
}

class HotInCat extends Component{
    render(){
        return(
            <div className="row cat-hot-news mb-5">
                <div className="col-lg-8 shadow-box-big p-0 image-in">
                <img className="bg-image bg" src={oscar} alt="Image"/>
                    <div className="d-flex align-content-between flex-wrap h-100">
                        <div className="mr-auto d-flex cat-box">
                            <div className="bg-dark w-100">
                                <p className="mt-2 text-center cat-text">Auto</p>
                            </div>
                        </div>
                        <div className="mt-auto p-2 bd-highlight">
                            <p className="m-1 text-left hot-new-text hot-new-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column p-0">
                    <SmallHotInCat url={oscar}/>
                    <SmallHotInCat url={oscar}/>
                    <SmallHotInCat url={oscar}/>
                    <SmallHotInCat url={oscar}/>
                    <SmallHotInCat url={oscar}/>
                    <SmallHotInCat url={oscar}/>
                </div> 
            </div>
        );
    }
}

class PostInCard extends Component{
    render(){
        return(
            <li>
                <div className="media">
                    <a>
                        <img alt="Image" src={incard} className="avatar avatar-square rounded mr-3" />
                    </a>
                    <div className="media-body">
                        <a>
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

class Middle extends Component{
    render(){
        return(
            <div className="row p-1 pt-5 w-100 mx-auto">
                <div className="col-lg-8 col-12 row m-0">
                    <HotInCat/>
                    <HotInCat/>
                    <HotInCat/>
                </div>
                <div className="col-lg-4 pl-lg-5">
                    <div className="row">
                        <div className="card col-7 col-lg-12">
                            <div className="card-body">
                                <h6>Never miss an update</h6>
                                <form>
                                    <div className="form-group mb-2">
                                        <input type="email" placeholder="Email Address" name="subscribeEmail" className="form-control" />
                                        <small>No spam, we promise.</small>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="ad w-100 m-auto col-5 col-lg-12">
                            <Image className="ad w-100 h-100" src={ad1} alt=""/>
                        </div>
                    </div>
                    <div className="card mt-5">
                        <div className="card-header d-flex justify-content-between">
                            <div>
                                <span className="h6">Related Groups</span>
                            </div>
                            <a>View all &rsaquo;</a>
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
                    <div className="ad w-100 mt-5 mb-5">
                        <Image className="w-100" src={ad2}/>
                    </div>
                </div>
            </div>
        );
    }
}

class OtherNewsCard extends Component{
    render(){
        return(
            <li class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <a>
                        <img class="card-img-top" src={othernewscardimg} alt="Card image cap"/>
                    </a>
                    <div class="card-body">
                        <h4 class="card-title">Sidekick</h4>
                        <p class="card-text">Holistic fitness tracking</p>
                    </div>
                    <div class="card-footer card-footer-borderless d-flex justify-content-between">
                        <div class="text-small">
                            <ul class="list-inline">
                                <li class="list-inline-item"><i class="icon-heart"></i> 221</li>
                                <li class="list-inline-item"><i class="icon-message"></i> 14</li>
                            </ul>
                        </div>
                        <div class="dropup">
                            <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="SidekickButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-dots-three-horizontal"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="SidekickButton">
                                <a class="dropdown-item">Save</a>
                                <a class="dropdown-item">Share</a>
                                <a class="dropdown-item">Comment</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item">Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

class OtherNews extends Component{
    render(){
        return(
            <div class="m-1 mt-5">
                <ul class="row feature-list feature-list-sm">
                    <OtherNewsCard/>
                    <OtherNewsCard/>
                    <OtherNewsCard/>
                    <OtherNewsCard/>
                    <OtherNewsCard/>
                    <OtherNewsCard/>
                </ul>
            </div>
        )
    }
}

class Mainpage extends Component {
  render() {
    return (
        <div className="container">
            <Hotnews/>
            <Middle/>
            <OtherNews/>
        </div>
    );
  }
}

export default Mainpage;

