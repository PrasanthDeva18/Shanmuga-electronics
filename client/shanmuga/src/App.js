import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './AllRoute'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import { Routes, Route } from 'react-router-dom'
import userContext from './context/userContext';
import axios from 'axios'
import Admin from './Admin'
import Customer from './Customer'
import Dashboard from './AdminDashboard/Dashboard'
import ProductInsert from './AdminDashboard/ProductInsert'
import ProDisplay from './Productsuser/ProDisplay'
import ProductView  from './Productsuser/ProductView'
import Gallery from './Components/Gallery/Gallery'
// import Header from './Header'
const App = () => {
    let [registereduser, setRegisteredUser] = useState({
        token: undefined,
        name: undefined,
        email: undefined,
        role: undefined,
        id: undefined
    });
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });
    let [userregistered, setUserRegistered] = useState('');
    let [role, setRole] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');
    const [usersdata, setUsersData] = useState([]);

    // const [refresh, setRefresh] = useState(false);
    // useEffect(() => {
    //     if(!refresh) setRefresh(true)
    //   }, [refresh])




    useEffect(() => {
        const checkLoggedIn = async () => {

            // alert('i am refresh')
            // let token = sessionStorage.getItem("auth-token") ;
            let token = sessionStorage.getItem("auth-token");
            // alert(token);
            console.log('auth-token', token);
            if (token === null) {
                sessionStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await axios.post('http://localhost:5000/users/tokenIsValid',
                null,
                { headers: { "x-auth-token": token } }
            );
            if (tokenRes.data) {
                const userRes = await axios.get('http://localhost:5000/users/user',
                    { headers: { "x-auth-token": token } }
                );
                setUserData({
                    token,
                    user: userRes.data,
                })
                console.log('setuserdata', userData)
            }
        }
        checkLoggedIn();
    }, [])
    return (
        <userContext.Provider
            value={{
                userData,
                setUserData,
                userregistered,
                setUserRegistered,
                role,
                setRole,
                registereduser,
                setRegisteredUser,
                loggedInUser,
                setLoggedInUser,
                usersdata,
                setUsersData
            }}>
            <Navbar />
            {/* <Header/> */}
            <Routes>
                <Route exact path='/' element={<AllRoutes />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/user' element={<Customer />} />
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/dashboard/insertForm' element={<ProductInsert />} />
                <Route exact path='/user/productspage/' element={<ProDisplay />} />
                <Route exact path='/user/productspage/product/:id' element={<ProductView />} />
                <Route exact path='/gallery' element={<Gallery />} />
            </Routes>
        </userContext.Provider>

    )
}

export default App