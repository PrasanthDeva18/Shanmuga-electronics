import React, { useState, useEffect, useContext } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import Admin from '../Admin';
import Customer from '../Customer';
import axios from 'axios';
import userContext from '../context/userContext';
const Signup = () => {
    let { setUserRegistered } = useContext(userContext);
    let { registereduser } = useContext(userContext);
    const [userinfo, setUserinfo] = useState({
        name: '',
        email: '',
        password: '',
        cnfmpass: ''
    });
    const { role, setRole } = useContext(userContext);
    const clearInput = () => {
        setUserinfo({
            name: '',
            email: '',
            password: '',
            cnfmpass: ''
        });
    }

    const saveUser = (e) => {
        try {
            e.preventDefault();
            const headers = {
                'Content-Type': 'application/json'
            }
            axios.post('http://localhost:5000/users/createUser', userinfo, {
                headers: headers
            }).then(res => {
                alert('signup successfully')
                const user_id = res.data[0].id;
                let users = [];
                const Token = res.data[0].token;
                sessionStorage.setItem("auth-token", Token);

                axios.get(`http://localhost:5000/users/fetchUser/${user_id}`,
                    { headers: { "x-auth-token": Token } })
                    .then(res => {
                        // console.log('users are',res);
                        // users = JSON.stringify(res.data);
                        users = res.data[0];
                        // console.log('bd',users);
                        registereduser = ({
                            token: users.token,
                            name: users.name,
                            email: users.email,
                            role: users.role,
                            id: users._id

                        });
                        setRole(registereduser.role);
                        setUserRegistered(registereduser);
                    })
            })
            clearInput();
        }
        catch (err) {
        }
    }

    const updateField = e => {

        setUserinfo({
            ...userinfo,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        // console.log('role useEffect',role);

    }, [role])
    return (
        <>
            {
                role == 'Admin' ? <Admin />
                    : role == 'user' ? <Customer /> :
                        <div className='parent' >
                            <div className='box22'>
                                <div className='log'>
                                    <img src={logo} style={{ 'width': '70px', 'height': '40px', 'marginLeft': '29px' }} />
                                    <h2 className='ll' >Signup</h2>
                                </div>
                                <div className='kl'>
                                    <div >
                                        <form className='form' onSubmit={saveUser}>
                                            <input type='text' placeholder='Name' value={userinfo.name} name='name' onChange={(e) => updateField(e)} />
                                            <input type='text' placeholder='Email' value={userinfo.email} name='email' onChange={(e) => updateField(e)} />
                                            <input type='text' placeholder='Password' value={userinfo.password} name='password' onChange={(e) => updateField(e)} />
                                            <input type='text' placeholder='Confirm Password' value={userinfo.cnfmpass} name='cnfmpass' onChange={(e) => updateField(e)} />
                                            <button className='btnnn'>Submit</button>
                                        </form>
                                    </div>
                                    <Link className='para2' to='/login'>Already have an account yet? Login</Link>
                                </div>
                            </div>
                        </div>
            }
        </>

    )
}

export default Signup