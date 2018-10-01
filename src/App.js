import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
