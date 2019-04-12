import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import Category from '../src/components/category/category'
import Article from '../src/components/article/article'
import Mainpage from './components/mainpage/main'
import Registration from './components/registration/registration'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" exact component={Mainpage}></Route>
                <Route path="/category" exact component={Category}></Route>
                <Route path="/article" exact component={Article}></Route>
                <Route path="/registration" exact component={Registration}></Route>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
