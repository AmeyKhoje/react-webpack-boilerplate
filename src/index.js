import React from 'react';
import ReactDOM from 'react-dom';
import NetflixApp from './NetflixApp';
import './assets/style/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <NetflixApp />
  </React.StrictMode>,
  document.getElementById('netflix-app')
);
