const path = require('path');

const express = require('express');

const productsControl = require('../controllers/products')

const router = express.Router();

const products = [];

// admin/add-product => GET
router.get('/add-product', productsControl.getAddProduct);

// admin/add-product => POST
router.post('/add-product', productsControl.postAddProduct);

module.exports = router;
