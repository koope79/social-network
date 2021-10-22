import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.items}>

        <div className={s.icon}>
          <img src='https://3u26hb1g25wn1xwo8g186fnd-wpengine.netdna-ssl.com/files/2019/06/Logo-300x300.png'></img>
        </div>

        <div className={s.loginBlock}>
          {props.isAuth
           ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
           : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>


    </header>
  );
}

export default Header;