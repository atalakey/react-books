import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './components/book-list';
import BookDetail from './components/book-detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { title: 'Javascript: The Good Parts', pages: 101 },
        { title: 'Harry Potter', pages: 39 },
        { title: 'The Dark Tower', pages: 85 },
        { title: 'Eloquent Ruby', pages: 1 }
      ],
      activeBook: null
    };
  }

  selectBook = (book) => {
    this.setState({ activeBook: book });    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BookList books={this.state.books} selectBook={this.selectBook} />
        <BookDetail book={this.state.activeBook} />
      </div>
    );
  }
}

export default App;
