import React, { Component } from 'react';
import '../mainpage/main.css';
import '../../assets/css/theme.css';
import * as functions from '../../helpFunctions'

class SmallHotInCat extends Component{
    render(){
        return(
            <div className="cat-hot-small-box image-in d-flex align-items-end shadow-box-xs" style={functions.image(this.props.url)}>
                <p className="m-2 text-left hot-new-text-white">Lorem ipsum dolor</p>
            </div>
        );
    }
}

export default SmallHotInCat