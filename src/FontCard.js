import React, { Component } from 'react';
import './App.css';

class FontCard extends React.Component {
  render() {
    const style = {
      fontFamily: this.props.title
    };
    return (
      <React.Fragment>
        <div className="card">
          <p className="card-title">{this.props.title}</p>
          <div className="card-text-container">
            <p className="card-text" style={style}>
              {this.props.sample}
            </p>
          </div>
          <div className="card-footer">
            <button className="card-btn">
              <a href={this.props.siteLink} target="_blank">
                Google Fonts
              </a>
            </button>
            <button className="card-btn card-btn-right">
              <a href={this.props.downloadLink} target="_blank">
                Download
              </a>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FontCard;
