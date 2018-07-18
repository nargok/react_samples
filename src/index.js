import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormWithAlert from './components/FormWithAlert'
import CounterWithCharacter from './components/CounterWithCharacter'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterWithCharacter />, document.getElementById('root'));
registerServiceWorker();