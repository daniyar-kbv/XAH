import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../mainpage/main.css';
import '../../assets/css/theme.css';
import ad1 from '../mainpage/images/landrover.png';
import ad2 from '../mainpage/images/ipo.png';
import PostInCard from '../postincard/postInCard'
import HotInCat from '../hotincat/hotInCat'

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
                            <p>View all &rsaquo;</p>
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

export default Middle