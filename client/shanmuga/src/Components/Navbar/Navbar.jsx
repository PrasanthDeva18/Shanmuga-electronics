import {redirects, Link, useNavigate, } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../images/logo.svg'
import shop from '../../images/shop.svg'
import { useState, useEffect, useContext } from 'react'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x';
import userContext from '../../context/userContext';

const Navbar = () => {
    const { userData, setUserData } = useContext(userContext);
    const { role, setRole } = useContext(userContext);
    let { userregistered, setUserRegistered } = useContext(userContext);
    let { setRegisteredUser } = useContext(userContext);
    let { loggedInUser, setLoggedInUser } = useContext(userContext);

    const navigate = useNavigate()
    // const register = () => navigate('/signup');
    // const login = () => navigate('/login');
    const [toggle, setToggle] = useState(false);

    const logout = (e) => {
        // e.preventDefault();
        setUserData({
            token: undefined,
            user: undefined
        });
        setUserRegistered(undefined);
        setRole(undefined);
        setRegisteredUser(undefined);
        setLoggedInUser(undefined);
        sessionStorage.removeItem('auth-token');
        // localStorage.removeItem()
        navigate('/')
    };

    useEffect(() => {
        // console.log('userregistered useEffect',userregistered);

    }, [userregistered]);

    useEffect(() => {
        // console.log('logged in user useEffect',loggedInUser);
    }, [loggedInUser]);

    useEffect(() => {
        // console.log('logged in user useEffect',loggedInUser);
    }, [role]);


    const handleToggle = () => {
        setToggle(!toggle);
    }
  
    

   

    return (
        <div class={toggle ? 'navbar expanded' : 'navbar'}>
            <div className='nav-logo'>

                <img src={Logo} alt='img' style={{ width: "47px", height: "47px" }} />

                <h3 className='logo'>Sri Shanmuga Electronics</h3>

            </div>
            <div className='toggle-icon' onClick={handleToggle}>
                {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} color="black" size={28} />}

            </div>

            <div class="navbar-menu">
                <Link class="navbar-item1" to="/">Home</Link>
                <Link class="navbar-item2" to="/gallery">Gallery</Link>
                <Link class="navbar-item1" to="/">Services</Link>
                <Link class="navbar-item2" to="/">About us</Link>
                {/*  userData.user|| userregistered || loggedInUser  */}
                {
                   userData.user||  userregistered ||  loggedInUser ? (
                        <>
                            {role == 'Admin' ? (
                                <>
                                    <Link to='/admin/dashboard/insertForm'>Dashboard</Link>
                                    <button className='bt-log' onClick={logout}>Log out</button>
                                </>
                            ) : (
                                <>
                                    <Link to='/user/productspage'>Products</Link>
                                    <button className='bt-log' onClick={logout}>Log out</button>
                                </>
                            )
                            }
                        </>
                    ) : (
                        <>
                              <Link to="/login"><img src={shop} /></Link>
                              { sessionStorage.setItem('auth-token','') }
                            {/* redirects('/') */}

                        </>
                    )
                }

                  

            </div>
        </div>
    )
}

export default Navbar


