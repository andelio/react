import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props)=>(
  <div className = {style.nav}>
    <ul>
      <li>
        <NavLink to = {{pathname:'/home'}} activeClassName = {style.active}>首页</NavLink>
      </li>
      <li>
        <NavLink to={{pathname: '/follow'}} activeClassName={style.active}>关注</NavLink>
      </li>
      <li>
        <NavLink to={{pathname: '/column'}} activeClassName={style.active}>栏目</NavLink>
      </li>
     
    </ul>
  </div>
);

export default Header;