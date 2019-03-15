import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import Category from '../src/components/category/category'
import Article from '../src/components/article/article'
=======
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Mainpage from './components/mainpage/main'
>>>>>>> ba6e71f2a1b1e33581a6fbe556c1db4147d912f2

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
<<<<<<< HEAD
        <Article/>
        <Category/>
=======
        <Mainpage/>
>>>>>>> ba6e71f2a1b1e33581a6fbe556c1db4147d912f2
        <Footer/>
      </div>
    );
  }
}

export default App;
