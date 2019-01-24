import React, { Component } from 'react';
//import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/Header';
// import Footer from './components/Layout/Footer/Footer';
 import Home from './components/Home/Home';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Home />
      </div>
    );
  }
}

export default App;
