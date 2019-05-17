import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './components/App';
const element = (
    <Provider store={store}>
        <App/>
    </Provider>);
const container = document.getElementById('app');

ReactDOM.render(element,container);

module.hot.accept();