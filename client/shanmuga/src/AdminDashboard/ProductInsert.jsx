import React, { useState } from 'react'
import axios from 'axios';
import './Admin.css'
const ProductInsert = () => {


    const [products, setProducts] = useState({
        pname: '',
        price: '',
        description: '',
        category: '',
        stocks: '',
        seller: '',
    })

    // const [images, setImages] = useState([]);
    // const [imagesPreview, setImagesPreview] = useState([]);

    const categories = [
        'amplifiers',
        'speakers',
        'televisions',
        'home theatres',
        'spares'
    ];


    const saveProducts = (e) => {
        try {
            alert('working')
            e.preventDefault();
            const headers = {
                'Content-Type': 'application/json'
            }
            axios.post('http://localhost:5000/api/product/insertproducts', products).then(res => {
                if (res.data.success) {
                    alert("product insert successfully")
                    console.log(res.data[1]);
                }
            }).catch(err => {
                alert(err.response.data)
            })
        }
        catch (err) {
            alert(err)
        }
    }
    const updateField = e => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='productss'>
            <div className='prod'>
                <h3>INSERT PRODUCTS</h3>
                <form onSubmit={saveProducts} className='productForm'>
                    <input type='text' placeholder='Product Name' name='pname' onChange={(e) => updateField(e)} value={products.pname} />
                    <input type='text' placeholder='Price' name='price' onChange={(e) => updateField(e)} value={products.price} />
                    <textarea placeholder='Enter product description' name='description' onChange={(e) => updateField(e)} value={products.description}></textarea>
                    {/* <label htmlFor="category_field">Category</label> */}
                    <select onChange={(e) => updateField(e)} name='category' className="form-control" id="category_field">
                        <option value="">Select</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <input type='number' placeholder='Stocks' name='stocks' onChange={(e) => updateField(e)} value={products.stocks} />
                    <input type='text' placeholder='Seller Name' name='seller' onChange={(e) => updateField(e)} value={products.seller} />
                    <button className='btnnn'>INSERT</button>
                </form>
            </div>


        </div>
    )
}

export default ProductInsert