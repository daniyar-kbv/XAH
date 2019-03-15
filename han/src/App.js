import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Mainpage from './components/mainpage/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Mainpage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
