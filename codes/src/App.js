import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Router from './router/Index';
import Container from './router/Container';
import Menu from './containers/Menu';

class App extends Component {

  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-content">
            <div className="App-menu">
              <Menu />
            </div>
            <div className="App-content-page">
              <Router />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
