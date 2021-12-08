import React from 'react';
import './Header.css'
import {NavLink,useLocation} from 'react-router-dom';

const HeaderT = ()=> {
  const location= useLocation();

  React.useEffect(()=>{
    console.log('mudou a rota');
  },[location]);

  return (
   <nav>
     <NavLink to='/' end>Home</NavLink>{' '} | {' '} <NavLink to='sobre'>Sobre</NavLink>{' '} |{' '}  <NavLink to='Login'>Login</NavLink>
   </nav>
  );
};

export default HeaderT;