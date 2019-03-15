import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import Category from '../src/components/category/category'
import Article from '../src/components/article/article'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Article/>
        <Category/>
        <Footer/>
      </div>
    );
  }
}

export default App;
