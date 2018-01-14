import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <ul class="nav masthead-nav">
    								<li class="active"><a href="#"><i class="fa fa-home fa-2x"></i></a></li>
    								<li><a href="https://github.com/rambabugovind"><i class="fa fa-github-square fa-2x"></i></a></li>
    								<li><a href="https://linkedin.com/in/kawixiao"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
    								<li><a href="https://twitter.com/"><i class="fa fa-twitter-square fa-2x"></i></a></li>
    								<li><a href="https://facebook.com/"><i class="fa fa-facebook-square fa-2x"></i></a></li>
    		</ul>
        <p className="App-intro">
          Website is under construction!!
        </p>
      </div>
    );
  }
}

export default App;
