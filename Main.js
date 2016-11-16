import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ES6Panel, Xpanel, Toptiles, Daily, Panel, InstaRoot, Insta, InstaDetails } from './App.js';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';

ReactDOM.render( <App/>, document.getElementById('app'));
ReactDOM.render(<Toptiles />, document.getElementById('toptiles'));
