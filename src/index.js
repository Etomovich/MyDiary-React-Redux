import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './routes/index';
const element = (
    <Provider store={store}>
        <Routes />
    </Provider>);
const container = document.getElementById('app');

ReactDOM.render(element,container);

module.hot.accept();
