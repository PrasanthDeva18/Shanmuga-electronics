const express = require('express');
const router = express.Router();
const {getSingleProduct,productInsert,getproducts,updateproduct,deleteproducts} =  require('../userController/productController')

router.get('/product/getAllProducts',getproducts);
router.post('/product/insertproducts',productInsert);
router.get('/product/:id',getSingleProduct)
router.put('/products/:id',updateproduct)
router.delete('/products/:id',deleteproducts);



module.exports= router;
