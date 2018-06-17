import React, { Component } from 'react';
import fonts from './data/fonts';
import FontCard from './FontCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSansClick = this.handleSansClick.bind(this);
    this.handleSerifClick = this.handleSerifClick.bind(this);
    this.handleDisplayClick = this.handleDisplayClick.bind(this);
    this.state = { filteredFonts: [] };
  }

  componentDidMount() {
    const sansArray = fonts.filter(font => font.type === 'sans');
    this.setState({ filteredFonts: sansArray });
  }

  handleSansClick() {
    const sansArray = fonts.filter(font => font.type === 'sans');
    this.setState({ filteredFonts: sansArray });
  }

  handleSerifClick() {
    const serifArray = fonts.filter(font => font.type === 'serif');
    this.setState({ filteredFonts: serifArray, color: 'blue' });
  }

  handleDisplayClick() {
    const displayArray = fonts.filter(font => font.type === 'display');
    this.setState({ filteredFonts: displayArray });
  }

  render() {
    const filteredFonts = this.state.filteredFonts;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Typewise</h1>
          <p className="App-subheader">
            A curated assortment of the best Google Fonts.
          </p>
        </header>
        <div className="navbar">
          <span className="navbar-item" onClick={this.handleSansClick}>
            Sans
          </span>
          <span className="navbar-item" onClick={this.handleSerifClick}>
            Serif
          </span>
          <span className="navbar-item" onClick={this.handleDisplayClick}>
            Display
          </span>
        </div>
        <div className="card-container">
          {filteredFonts.map(font => {
            return (
              <FontCard
                title={font.title}
                type={font.type}
                key={font.title}
                fontFamily={font.fontFamily}
                image={font.image}
                sample={font.sample}
                siteLink={font.siteLink}
                downloadLink={font.downloadLink}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
