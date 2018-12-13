import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

const config = {
  google: {
    families: [
      'Roboto',
      'Roboto Slab',
      'Work Sans',
      'Open Sans',
      'Playfair Display',
      'Montserrat',
      'Raleway',
      'Alegreya',
      'Merriweather',
      'Roboto Mono',
      'Space Mono',
      'Rufina',
      'Quattrocento',
      'Lato',
      'Source Sans Pro',
      'Source Serif Pro',
      'Poppins',
      'Lobster',
      'Patua One',
      'Abril Fatface',
      'Rozha One',
      'Ultra',
      'Archivo Narrow',
      'Oswald',
      'Zilla Slab',
      'Overpass',
      'Josefin Sans',
      'Old Standard TT',
      'Gentium Basic',
      'Varela Round',
      'Rajdhani',
      'Nunito Sans',
      'Neuton',
      'Cabin',
      'Noto Serif',
      'Libre Franklin',
      'Rubik',
      'Comfortaa',
      'PT Sans',
      'PT Serif',
      'Anonymous Pro',
      'Inconsolata',
      'Bitter',
      'Domine',
      'Spectral',
      'Karla'
    ]
  }
};

ReactDOM.render(
  <WebfontLoader config={config}>
    <App />
  </WebfontLoader>,
  document.getElementById('root')
);
registerServiceWorker();
