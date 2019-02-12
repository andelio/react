import React from 'react';
import style from './Footer.module.css';
import {NavLink} from 'react-router-dom';

const Footer = (props)=>(
  <div className={style['foot-btn']}>
    <ul>
      <li className = {style.home}><NavLink to={{pathname: '/home'}} /></li>
      <li className = {style.write}><NavLink to={{pathname:'/buycar'}} /></li>
      <li className = {style.my}><NavLink to={{pathname: '/user'}} /></li>
    </ul>  
  </div>
);

export default Footer;