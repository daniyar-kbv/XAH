import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../mainpage/main.css';
import '../../assets/css/theme.css';
import oscar from '../mainpage/images/oscar.jpg';
import SmallHotInCat from '../smallhotincat/smallHotInCat'

class HotInCat extends Component{
    render(){
        return(
            <div className="row cat-hot-news mb-5">
                <div className="col-lg-8 shadow-box-big p-0 image-in">
                <Image className="bg-image bg" src={oscar}/>
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

export default HotInCat