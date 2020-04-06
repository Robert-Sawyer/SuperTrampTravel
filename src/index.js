import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
// import authReducer from './store/reducers/auth';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();
