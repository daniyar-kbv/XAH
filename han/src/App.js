import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Mainpage from './components/mainpage/main'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" exact component={Mainpage}></Route>
                {/* <Mainpage/> */}
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
