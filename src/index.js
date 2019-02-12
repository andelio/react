import React,{Component} from 'react';
import {render} from 'react-dom';

import './assets/css/base.css';
import './library/font';
import App from './components/app';
import {BrowserRouter,Route} from 'react-router-dom';

import './api/global';


let root = {
    bNav : true,
    bFoot : true,
    bLoading : false
};

window.rc_root = root;
render(
    <BrowserRouter>
        <Route component = {App} />
    </BrowserRouter>,
    document.getElementById('root')
)