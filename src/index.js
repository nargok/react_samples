import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormWithAlert from './components/FormWithAlert'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FormWithAlert />, document.getElementById('root'));
registerServiceWorker();
