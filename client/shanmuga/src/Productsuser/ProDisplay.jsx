import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './pro.css'
import { Link } from 'react-router-dom';
const ProDisplay = () => {
    const [prod, setData] = useState([]);
    const [prod1, setData1] = useState([]);

   

    let products = [];
    const datas = () => {
        axios.get('http://localhost:5000/api/product/getAllProducts').then(res => {
            products = res.data;
            // console.log(products)
            setData(products);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        datas();
    }, [prod1])

    return (
        <div className='proo'>
            {
                prod.map(pro => (
                    <div className='pp'>
                        <img  src='https://images.unsplash.com/photo-1574199960812-3bb320659f3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFtcGxpZmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' style={{ 'width': '40%', 'height': '40%' }} />
                        <p className='pname'>{pro.pname}</p>
                        <p className='desc'>{pro.description}</p>
                        <p className='price'>₹ {pro.price}</p>
                        <div className='btns'>
                            <button className='bttn'><Link style={{'color':'white'}}  to={`/user/productspage/product/${pro._id}`}>View Product</Link></button>
                            <button className='bttn'>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProDisplay