import React, { Component } from 'react';
import './main.css';
import '../../assets/css/theme.css';
import Hotnews from '../hotnews/hotNews'
import Middle from '../middleinmain/middle'
import OtherNews from '../othernews/otherNews'

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

