import React, { Component } from 'react';
import othernewscardimg from '../mainpage/images/x-trail.jpg';
import { Image } from 'react-bootstrap'

class OtherNewsCard extends Component{
    render(){
        return(
            <li className="col-12 col-md-6 col-lg-4">
                <div className="card">
                    <p>
                        <Image className="card-img-top" src={othernewscardimg}/>
                    </p>
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
                                <p className="dropdown-item">Save</p>
                                <p className="dropdown-item">Share</p>
                                <p className="dropdown-item">Comment</p>
                                <div className="dropdown-divider"></div>
                                <p className="dropdown-item">Report</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default OtherNewsCard