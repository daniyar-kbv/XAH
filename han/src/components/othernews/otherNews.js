import React, { Component } from 'react';
import '../mainpage/main.css';
import '../../assets/css/theme.css';
import OtherNewsCard from '../othernewscard/otherNewsCard'

class OtherNews extends Component{
    render(){
        return(
            <div className="m-1 mt-5">
                <ul className="row feature-list feature-list-sm">
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

export default OtherNews