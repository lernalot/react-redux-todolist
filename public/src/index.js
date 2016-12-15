import React,{Component} from 'react';
import {render} from 'react-dom';
import App from './containers/app';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('app')
);

