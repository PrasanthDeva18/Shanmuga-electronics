const productModel = require('../models/product');
const ErrorHandler = require('../utils/errorhandler')
const catchAsyncError = require('../middleware/catchAsync')
//get all products
exports.getproducts = async (req, res, next) => {
    try {
        const products = await productModel.find();
        console.log("hiiii")
        res.status(200).json(
            // success: true,
            // count: products.length,
            products
        )
    } catch (err) {
        console.log("hiiii")
        res.status(404).json({
            // msg:err,
            message: "very boring"
        })
    }

}

//insert products
exports.productInsert = catchAsyncError(async (req, res, next) => {

        const product = await productModel.create(req.body);
        res.status(201).json([{
            success: true,
            product
        }])

})

//get single product
exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            // return res.status(404).json({
            //     success:false,
            //     message:'product not found'
            // })
            return next(new ErrorHandler('product not found', 400));
        }
        res.status(201).json({
            
            pname:product.pname,
            description:product.description,
            price:product.price,
            seller:product.seller,
            stocks:product.stocks
            
        })
})

exports.updateproduct =catchAsyncError( async (req, res, next) => {
        let products = await productModel.findById(req.params.id);
        if (!products) {
            return res.status(404).json({
                success: false,
                message: 'product not found'
            })
        }
        products = await productModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true

        })

        res.status(200).json({
            success: true,
            products
        })
})

//delete product
exports.deleteproducts = catchAsyncError(async (req, res, next) => {
        const products = await productModel.findById(req.params.id);
        if (!products) {
            return res.status(404).json({
                success: false,
                message: 'product not found'
            })
        }
        await products.deleteOne();
        res.status(200).json({
            success: true,
            message: "product deleted"
        })
})