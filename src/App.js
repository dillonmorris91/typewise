import React, { Component } from "react";
import fonts from "./data/fonts";
import FontCard from "./FontCard";
import classNames from "classnames";

const filters = ["sans", "serif", "display"];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAllFontsClick = this.handleAllFontsClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.state = {
      filteredFonts: [],
      activeFilter: null
    };
  }

  componentDidMount() {
    const allFontsArray = fonts.map(font => font);
    this.setState({ filteredFonts: allFontsArray });
  }

  handleAllFontsClick() {
    const allFontsArray = fonts.map(font => font);
    this.setState({ filteredFonts: allFontsArray });
  }

  handleFilterClick(filter) {
    const displayArray = fonts.filter(font => font.type === filter);
    this.setState({ filteredFonts: displayArray, activeFilter: filter });
  }

  renderNavbarItems = () => {
    const { activeFilter } = this.state;

    return filters.map(filter => (
      <span
        key={filter}
        className={classNames("navbar-item", {
          "navbar-item--active": activeFilter === filter
        })}
        onClick={() => this.handleFilterClick(filter)}
      >
        {filter}
      </span>
    ));
  };

  render() {
    const filteredFonts = this.state.filteredFonts;
    const { activeFilter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Typewise</h1>
          <p className="App-subheader">
            A curated assortment of the best Google Fonts.
          </p>
        </header>
        <div className="navbar">{this.renderNavbarItems()}</div>
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
