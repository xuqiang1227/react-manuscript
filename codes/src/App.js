import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Menu } from 'antd';
import Router from './router/Index';
import Container from './router/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {path: '/01'}
  }

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
              <Menu theme={'dark'}
                style={{ width: 256 }}
                mode="inline"
                defaultOpenKeys={['sub1']}
                defaultSelectedKeys={['01']}
                onClick={({item}) => {
                  window.history.go(item.props.path);
                }}>
                <Menu.SubMenu title={'基础知识'} key='sub1'>
                  <Menu.Item key="01" path={'/01'}>初识React</Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </div>
            <div className="App-content-page">
              <Router path={this.state.path}/>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
