import React from 'react';
import { useNavigate } from 'react-router';

const Login = ()=> {
    const navigate =useNavigate();
    function handleClick(){
        console.log('fazer login');
        navigate('/sobre');
    }

    return (
    <>
        <h1>Login</h1>
        <button onClick={handleClick}>Login</button>
    </>
    );
};

export default Login;