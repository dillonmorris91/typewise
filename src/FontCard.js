import React, { Component } from 'react';
import './App.css';

class FontCard extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.title} // {this.props.type}
      </div>
    );
  }
}

export default FontCard;
