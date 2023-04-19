import React, { useState, useContext } from 'react';
import './login.css'
import userContext from '../context/userContext';
import logo from '../images/logo.svg'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Admin from '../Admin';
import Customer from '../Customer';
const Login = () => {

    const [userlogin, setUserlogin] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    let { loggedInUser, setLoggedInUser } = useContext(userContext);
    const { role, setRole } = useContext(userContext);

    const clearInput = () => {
        setUserlogin({
            email: '',
            password: ''
        });
    }

    const loginUser = (e) => {
        try {
            e.preventDefault();
            axios.post('http://localhost:5000/users/login', userlogin)
                .then(res => {
                    alert("success")
                    // console.log('login user is',res.data[0]);
                    const loginUser = res.data[0];

                    
                    setLoggedInUser({
                        token: loginUser.token,
                        name: loginUser.name,
                        email: loginUser.email,
                        role: loginUser.role,
                        id: loginUser.id

                    });
                    setRole(loginUser.role);
                    sessionStorage.setItem("auth-token", loginUser.token);

                    if(loginUser.role == 'Admin'){
                        navigate('/admin');
                    }
                    else if(loginUser.role == 'user'){
                        navigate('/user');
                    }
                    // console.log('logged in user',loggedInUser);
                }).catch(err => {
                    console.log(err);

                });
            clearInput();
        }
        catch (err) {
            console.log(err)
        }
    }

    const updateField = e => {

        setUserlogin({
            ...userlogin,
            [e.target.name]: e.target.value
        });
    };
    return (
        <>
            {
                role == 'Admin' ?
                    <Admin /> :
                    role == 'user' ?
                        <Customer /> :
                        <div className='parent'>
                            <div className='box2'>
                                <div className='log'>
                                    <img src={logo} style={{ 'width': '70px', 'height': '40px', 'marginLeft': '29px' }} />
                                    <h2 className='ll' >Login</h2>
                                </div>
                                <div className='kl'>
                                    <form onSubmit={loginUser}>
                                    <div className='form'>
                                        <input type='text' placeholder='username@gmail.com' name='email'  value={userlogin.email} onChange={(e) => updateField(e)} />
                                        <input type='text' placeholder='Password' name='password'   value={userlogin.password} onChange={(e) => updateField(e)}   />
                                        <button className='btnnn'>Sign In</button>
                                    </div>
                                    </form>
                                    <p className='para'>Forget Password?</p>
                                    <Link className='para2' to='/signup'>Don't have an account yet? Register</Link>
                                </div>
                            </div>
                        </div>
            }
        </>

    )
}

export default Login