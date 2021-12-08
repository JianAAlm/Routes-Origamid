import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';

const Home = ()=> {
  return (
   <>
     <Head title='Home' description='Esta é a  descricao home'/>
     <h1>Home</h1>
     <h4>Bem vindo a home</h4>
     <Link to='produto/notebook'>Notebook</Link>{' '} | {' '}
     <Link to='produto/smartphone'>Smartphone</Link>
   </>
  );
};

export default Home;
