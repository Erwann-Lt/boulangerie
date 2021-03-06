import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import ScrollToTop from 'react-router-scroll-top'


ReactDOM.render(
  <Router >
   <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
