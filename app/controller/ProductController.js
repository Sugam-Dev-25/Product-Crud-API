const Product = require('../models/Product');

class ProductController{

    async createProduct(req, res){

        try{
            const {name, description, price, category, inStock} = req.body;
            const product = new Product({name, description, price, category, inStock});
            await product.save();
            res
            .status(200)
            .json({
                status: 'true',
                message: 'Product created successfully',
                data: 'product'
            });
        } catch (error) {
            res
            .status(500)
            .json({
                status: 'false',
                message: 'Product not created',
                error
            });
        }
    };

    async getAllProducts(req, res){
        try {
            const products = await Product.find();
            res
            .status(200)
            .json({
                status: 'true',
                message: 'Products fetched successfully',
                data: products
            });
        } catch (error) {
            res
            .status(500)
            .json({
                status: 'false',
                message: 'Products not fetched',
                error
            });
        }
    };

    async getSingleProduct(req, res){
        try {
            const product = await Product.findById(req.params.id);
            res
            .status(200)
            .json({
                status: 'true',
                message: 'Product fetched successfully',
                data: product
            });
        } catch (error) {
            res
            .status(500)
            .json({
                status: 'false',
                message: 'Product not fetched',
                error
            });
        }
    };

    async updateProduct(req, res){
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res
            .status(200)
            .json({
                status: 'true',
                message: 'Product updated successfully',
                data: product
            });
        } catch (error) {
            res
            .status(500)
            .json({
                status: 'false',
                message: 'Product not updated',
                error
            });
        }
    };

    async deleteProduct(req, res){
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            res
            .status(200)
            .json({
                status: 'true',
                message: 'Product deleted successfully',
                data: product
            });
        } catch (error) {
            res
            .status(500)
            .json({
                status: 'false',
                message: 'Product not deleted',
                error
            });
        }
    };
};

module.exports = new ProductController();