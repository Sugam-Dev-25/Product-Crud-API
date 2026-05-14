const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');

router.post('/create', productController.createProduct);
router.get('/read', productController.getAllProducts);
router.get('/read/:id', productController.getSingleProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;