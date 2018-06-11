import React, { Component } from 'react';
import './App.css';
import fonts from './data/fonts';
import FontCard from './FontCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Typewise</h1>
          <p className="App-subheader">
            A curated assortment of the best Google Fonts.
          </p>
        </header>
        <div className="navbar">
          <span className="navbar-item">Sans</span>
          <span className="navbar-item">Serif</span>
          <span className="navbar-item">Display</span>
        </div>
        <div className="card-container">
          {fonts.map(font => {
            return <FontCard title={font.title} type={font.type} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
