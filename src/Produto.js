import React from 'react';
import { Route,Routes, useLocation, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = ()=> {
    const params= useParams();
    console.log(params);
    const location= useLocation();
    console.log(location);
    const search= new URLSearchParams(location.search);
    console.log(search.get('q'));

  return (
   <>
     <h1>Bem vindo ao Produto</h1>
     <h4>Produto:{params.id}</h4>

    <NavLink to=''>Descrição</NavLink>{' '} | {' '} 
    <NavLink to='customizacao'>Customização</NavLink>{' '} | {' '} 
    <NavLink to='avaliacao'>Avaliação</NavLink>

     <Routes>
        <Route path='/' element={ProdutoDescricao}/>
        <Route path='avaliacao' element={ProdutoAvaliacao}/>
        <Route path='customizado' element={ProdutoCustomizado}/>
     </Routes>
   </>
  );
};

export default Produto;