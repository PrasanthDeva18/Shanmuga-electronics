import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './pro.css'
const ProductView = () => {

    const params = useParams()
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${params.id}`).then(res => {
            console.log(res.data)
            // products = res.data
            setProductDetail(res.data);
        })
    }, [params.id])


    return (
        <div>

            <div className='pros'>
                <div className='image'>
                    <img className='proi' src='https://images.unsplash.com/photo-1574199960812-3bb320659f3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFtcGxpZmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' style={{ 'width': '70%', 'height': '70%' }} />
                </div>
                <div className='ri'>
                    <div>
                        Product Name: <p>{productDetail.pname}</p>
                    </div>
                    <div>
                        Product Description: <p>{productDetail.description}</p>
                    </div>
                    <div>
                        Seller Name: <p>{productDetail.seller}</p>
                    </div>
                    <div>
                        Price: <p>{productDetail.price}</p>
                    </div>
                    <div>
                        Available Stocks: <p>{productDetail.stocks}</p>
                    </div>

                    <button className='btnnss'>Add to Cart</button>
                </div>
            </div>


        </div>
    )
}

export default ProductView