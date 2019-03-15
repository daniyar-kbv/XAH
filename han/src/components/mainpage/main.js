import React, { Component } from 'react';
import { Button, Container , Row, Col, Image} from 'react-bootstrap';
import './main.css';
import '../../assets/css/theme.css'
import magazines from './images/magazines.jpg'
import nazik from './images/Nazik.jpg'
import oscar from './images/oscar.jpg'

class Hotnews extends Component{
    render(){
        return(
            <div className="row mt-5 ml-1 mr-1 mb-5" id="hot-news">
                <div className="col-6 col-sm-6 col-lg-6 shadow-box-big p-0 image-in">
                    <Image className="bg-image bg" src={magazines} alt="Image"/>
                    <div className="d-flex align-content-between flex-wrap h-100">
                        <div className="ml-auto d-flex cat-box">
                            <div className="bg-dark w-100">
                                <p className="mt-2 text-center cat-text">Auto</p>
                            </div>
                        </div>
                        <div className="mt-auto p-2 bd-highlight">
                            <p className="m-1 text-left hot-new-text hot-new-text-white image-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-6 p-0">
                    <div className="row col-12 h-50 h-50 shadow-box-small image-in m-0 w-100">
                    <Image className="bg-image bg" src={nazik} alt="Image"/>
                        <div className="d-flex align-content-between flex-wrap h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 text-center cat-text">Auto</p>
                                </div>
                            </div>
                            <div className="mt-auto p-2 bd-highlight">
                                <p className="m-1 text-left hot-new-text-white hot-new-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="row col-12 h-50 h-50 shadow-box-small image-in m-0">
                    <Image className="bg-image bg" src={oscar} alt="Image"/>
                        <div className="d-flex align-content-between flex-wrap h-100">
                            <div className="ml-auto d-flex cat-box">
                                <div className="bg-dark w-100">
                                    <p className="mt-2 text-center cat-text">Auto</p>
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

class Middle extends Component{
    render(){
        return(
            <div className="row p-1 pt-5 w-100 mx-auto">
                <div className="col-lg-8 col-12 row m-0">
                    <div className="row cat-hot-news">
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
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div>
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                        </div> 
                    </div>
                    <div className="row cat-hot-news mt-5">
                        <div className="col-lg-8 shadow-box-big p-0 image-in">
                        <Image className="bg-image bg" src={oscar} alt="Image"/>
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
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div>
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                        </div> 
                    </div>
                    <div className="row cat-hot-news mt-5">
                    <div className="col-lg-8 shadow-box-big p-0 image-in">
                        <Image className="bg-image bg" src={oscar} alt="Image"/>
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
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div>
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs">
                            <Image className="bg-image bg" src={oscar} alt="Image"/>
                                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                            </div> 
                        </div> 
                    </div>
                </div>
                <div className="col-lg-4 pl-lg-5">
                    <div className="row mt-5">
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
                            <Image className="ad w-100 h-100" src="images/landrover.png" alt=""/>
                        </div>
                    </div>
                    <div className="card mt-5">
                        <div className="card-header d-flex justify-content-between">
                            <div>
                                <span className="h6">Related Groups</span>
                            </div>
                            <a href="#">View all &rsaquo;</a>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled list-spacing-sm">

                                <li>
                                    <div className="media">
                                        <a href="#">
                                            <Image alt="Image" src="assets/img/graphic-product-bench-thumb.jpg" className="avatar avatar-square rounded mr-3" />
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

                                <li>
                                    <div className="media">
                                        <a href="#">
                                            <Image alt="Image" src="assets/img/graphic-product-kin-thumb.jpg" className="avatar avatar-square rounded mr-3" />
                                        </a>
                                        <div className="media-body">
                                            <a href="#">
                                                <span className="h6">Kin</span>
                                            </a>
                                            <span className="badge badge-secondary">Lifestyle</span>
                                            <div className="text-muted">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <small><i className="icon-heart"></i> 84</small>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <small><i className="icon-message"></i> 21</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="media">
                                        <a href="#">
                                            <Image alt="Image" src="assets/img/graphic-product-paydar-thumb.jpg" className="avatar avatar-square rounded mr-3" />
                                        </a>
                                        <div className="media-body">
                                            <a href="#">
                                                <span className="h6">Paydar</span>
                                            </a>
                                            <span className="badge badge-secondary">Productivity</span>
                                            <div className="text-muted">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <small><i className="icon-heart"></i> 253</small>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <small><i className="icon-message"></i> 19</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="media">
                                        <a href="#">
                                            <Image alt="Image" src="assets/img/graphic-product-pipeline-thumb.jpg" className="avatar avatar-square rounded mr-3" />
                                        </a>
                                        <div className="media-body">
                                            <a href="#">
                                                <span className="h6">pipeline.js</span>
                                            </a>
                                            <span className="badge badge-secondary">Development</span>
                                            <div className="text-muted">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <small><i className="icon-heart"></i> 84</small>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <small><i className="icon-message"></i> 25</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ad w-100 mt-5 mb-5">
                        <Image className="w-100" src="images/ipo.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

class OtherNews extends Component{
    render(){
        return(
            <div class="m-1 mt-5">
                <ul class="row feature-list feature-list-sm">
                    <li class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top" src="assets/img/graphic-product-sidekick.jpg" alt="Card image cap"/>
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
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Share</a>
                                        <a class="dropdown-item" href="#">Comment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top" src="assets/img/graphic-product-pitstop.jpg" alt="Card image cap"/>
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">Pitstop</h4>
                                <p class="card-text">Browser-based project management</p>
                            </div>
                            <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                <div class="text-small">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="icon-heart"></i> 90</li>
                                        <li class="list-inline-item"><i class="icon-message"></i> 34</li>
                                    </ul>
                                </div>
                                <div class="dropup">
                                    <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="PitstopButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-dots-three-horizontal"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="PitstopButton">
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Share</a>
                                        <a class="dropdown-item" href="#">Comment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top" src="assets/img/graphic-product-pipeline.jpg" alt="Card image cap"/>
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">pipeline.js</h4>
                                <p class="card-text">Snappy UI interaction library with flexible API</p>
                            </div>
                            <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                <div class="text-small">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="icon-heart"></i> 84</li>
                                        <li class="list-inline-item"><i class="icon-message"></i> 25</li>
                                    </ul>
                                </div>
                                <div class="dropup">
                                    <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="pipeline.jsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-dots-three-horizontal"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="pipeline.jsButton">
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Share</a>
                                        <a class="dropdown-item" href="#">Comment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top" src="assets/img/graphic-product-paydar.jpg" alt="Card image cap"/>
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">Paydar</h4>
                                <p class="card-text">Location based touch payments</p>
                            </div>
                            <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                <div class="text-small">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="icon-heart"></i> 253</li>
                                        <li class="list-inline-item"><i class="icon-message"></i> 19</li>
                                    </ul>
                                </div>
                                <div class="dropup">
                                    <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="PaydarButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-dots-three-horizontal"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="PaydarButton">
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Share</a>
                                        <a class="dropdown-item" href="#">Comment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top" src="assets/img/graphic-product-kin.jpg" alt="Card image cap"/>
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">Kin</h4>
                                <p class="card-text">The digital fashion assistant</p>
                            </div>
                            <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                <div class="text-small">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="icon-heart"></i> 84</li>
                                        <li class="list-inline-item"><i class="icon-message"></i> 21</li>
                                    </ul>
                                </div>
                                <div class="dropup">
                                    <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="KinButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-dots-three-horizontal"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="KinButton">
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Share</a>
                                        <a class="dropdown-item" href="#">Comment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top" src="assets/img/graphic-product-bench.jpg" alt="Card image cap"/>
                            </a>
                            <div class="card-body">
                                <h4 class="card-title">Bench</h4>
                                <p class="card-text">Accounting for creative people</p>
                            </div>
                            <div class="card-footer card-footer-borderless d-flex justify-content-between">
                                <div class="text-small">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="icon-heart"></i> 373</li>
                                        <li class="list-inline-item"><i class="icon-message"></i> 62</li>
                                    </ul>
                                </div>
                                <div class="dropup">
                                    <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="BenchButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-dots-three-horizontal"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="BenchButton">
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Share</a>
                                        <a class="dropdown-item" href="#">Comment</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

class Mainpage extends Component {
  render() {
    return (
        <div class="container">
            <Hotnews/>
            <Middle/>
            <OtherNews/>
        </div>
    );
  }
}

export default Mainpage;

