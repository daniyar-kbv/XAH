import React, { Component } from 'react';
import './App.css';

class Mainpage extends Component {
  render() {
    return (
        <div className="main" >
            <div className="container">
                <div className="row mt-5 ml-1 mr-1 mb-5" id="hot-news">
                    <div className="col-6 col-sm-6 col-lg-6 shadow-box-big p-0 image-in" style="background-image: url(images/magazines.jpg)">
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
                    <div className="col-6 col-sm-6 col-lg-6">
                        <div className="row h-50 h-50 shadow-box-small image-in" style="background-image: url(images/nazik.jpg)">
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
                        <div className="row h-50 h-50 shadow-box-small image-in" style="background-image: url(images/oscar.jpg)">
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
                <div className="row p-1 pt-5 w-100 mx-auto">
                    <div className="col-lg-8 col-12 row m-0">
                        <div className="row cat-hot-news">
                            <div className="col-lg-8 shadow-box-big p-0 image-in" style="background-image: url(images/subaru.jpg)">
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
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/bike.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div>
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/x-trail.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/keys.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/rr.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/duster.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/lexus.png)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                            </div> 
                        </div>
                        <div className="row cat-hot-news mt-5">
                            <div className="col-lg-8 shadow-box-big p-0 image-in" style="background-image: url(images/subaru.jpg)">
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
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/bike.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div>
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/x-trail.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/keys.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/rr.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/duster.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/lexus.png)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                            </div> 
                        </div>
                        <div className="row cat-hot-news mt-5">
                            <div className="col-lg-8 shadow-box-big p-0 image-in" style="background-image: url(images/subaru.jpg)">
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
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/bike.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div>
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/x-trail.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/keys.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/rr.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/duster.jpg)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                                <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style="background-image: url(images/lexus.png)">
                                    <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
                                </div> 
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-5">
                        <div className="row mt-5">
                            <div className="card col-7 col-lg-12">
                                <div className="card-body">
                                    <h6>Never miss an update ✌</h6>
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
                                <img className="ad w-100 h-100" src="images/landrover.png" alt=""/>
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
                                                <img alt="Image" src="assets/img/graphic-product-bench-thumb.jpg" className="avatar avatar-square rounded mr-3" />
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
                                                <img alt="Image" src="assets/img/graphic-product-kin-thumb.jpg" className="avatar avatar-square rounded mr-3" />
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
                                                <img alt="Image" src="assets/img/graphic-product-paydar-thumb.jpg" className="avatar avatar-square rounded mr-3" />
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
                                                <img alt="Image" src="assets/img/graphic-product-pipeline-thumb.jpg" className="avatar avatar-square rounded mr-3" />
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
                            <img className="w-100" src="images/ipo.png"/>
                        </div>
                    </div>
                </div>
                <div className="m-1 mt-5">
                    <ul className="row feature-list feature-list-sm">
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top" src="assets/img/graphic-product-sidekick.jpg" alt="Card image cap"/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">Sidekick</h4>
                                    <p className="card-text">Holistic fitness tracking</p>
                                </div>
                                <div className="card-footer card-footer-borderless d-flex justify-content-between">
                                    <div className="text-small">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="icon-heart"></i> 221</li>
                                            <li className="list-inline-item"><i className="icon-message"></i> 14</li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="SidekickButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="SidekickButton">
                                            <a className="dropdown-item" href="#">Save</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                            <a className="dropdown-item" href="#">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top" src="assets/img/graphic-product-pitstop.jpg" alt="Card image cap"/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">Pitstop</h4>
                                    <p className="card-text">Browser-based project management</p>
                                </div>
                                <div className="card-footer card-footer-borderless d-flex justify-content-between">
                                    <div className="text-small">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="icon-heart"></i> 90</li>
                                            <li className="list-inline-item"><i className="icon-message"></i> 34</li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="PitstopButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="PitstopButton">
                                            <a className="dropdown-item" href="#">Save</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                            <a className="dropdown-item" href="#">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top" src="assets/img/graphic-product-pipeline.jpg" alt="Card image cap"/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">pipeline.js</h4>
                                    <p className="card-text">Snappy UI interaction library with flexible API</p>
                                </div>
                                <div className="card-footer card-footer-borderless d-flex justify-content-between">
                                    <div className="text-small">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="icon-heart"></i> 84</li>
                                            <li className="list-inline-item"><i className="icon-message"></i> 25</li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="pipeline.jsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="pipeline.jsButton">
                                            <a className="dropdown-item" href="#">Save</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                            <a className="dropdown-item" href="#">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top" src="assets/img/graphic-product-paydar.jpg" alt="Card image cap"/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">Paydar</h4>
                                    <p className="card-text">Location based touch payments</p>
                                </div>
                                <div className="card-footer card-footer-borderless d-flex justify-content-between">
                                    <div className="text-small">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="icon-heart"></i> 253</li>
                                            <li className="list-inline-item"><i className="icon-message"></i> 19</li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="PaydarButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="PaydarButton">
                                            <a className="dropdown-item" href="#">Save</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                            <a className="dropdown-item" href="#">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top" src="assets/img/graphic-product-kin.jpg" alt="Card image cap"/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">Kin</h4>
                                    <p className="card-text">The digital fashion assistant</p>
                                </div>
                                <div className="card-footer card-footer-borderless d-flex justify-content-between">
                                    <div className="text-small">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="icon-heart"></i> 84</li>
                                            <li className="list-inline-item"><i className="icon-message"></i> 21</li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="KinButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="KinButton">
                                            <a className="dropdown-item" href="#">Save</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                            <a className="dropdown-item" href="#">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top" src="assets/img/graphic-product-bench.jpg" alt="Card image cap"/>
                                </a>
                                <div className="card-body">
                                    <h4 className="card-title">Bench</h4>
                                    <p className="card-text">Accounting for creative people</p>
                                </div>
                                <div className="card-footer card-footer-borderless d-flex justify-content-between">
                                    <div className="text-small">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><i className="icon-heart"></i> 373</li>
                                            <li className="list-inline-item"><i className="icon-message"></i> 62</li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="BenchButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="BenchButton">
                                            <a className="dropdown-item" href="#">Save</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                            <a className="dropdown-item" href="#">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </div>
    );
  }
}

export default App;
