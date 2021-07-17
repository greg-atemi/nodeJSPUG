const Product = require('../models/product');

exports.Products = (req, res, next) => {
    res.render('admin/products', { pageTitle: 'Products',
                                path: '/admin/products',
                                formsCSS: true,
                                activeAddProduct: true,
                                productCSS: true
                            });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle:'All Products',
            path: '/products',
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle:'Shop',
            path: '/',
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Shopping Cart',
                                path: '/shop/cart',
                                formsCSS: true,
                                activeAddProduct: true,
                                productCSS: true
                            });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout',
                                path: '/shop/checkout',
                                formsCSS: true,
                                activeAddProduct: true,
                                productCSS: true
                            });
}