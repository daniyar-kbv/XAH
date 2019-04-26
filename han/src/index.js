import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import jquery from 'jquery'
// import '../node_modules/popper.js/dist/popper.min';
// import '../node_modules/smartwizard/dist/js/jquery.smartWizard.min';
// import '../node_modules/prismjs/prism';
// // import '../node_modules/scrollmonitor/scrollMonitor';
// import '../node_modules/smooth-scroll/dist/smooth-scroll.min';
// import '../node_modules/zoom-vanilla.js/dist/zoom-vanilla.min';
import $ from 'jquery'
window.jQuery = $;
window.$ = $;
global.jQuery = $;
window.$ = window.jQuery = jquery;
const smartwizzard = require('smartwizard');



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
