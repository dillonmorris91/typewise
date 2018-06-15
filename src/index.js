import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Merriweather', 'Open Sans']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
