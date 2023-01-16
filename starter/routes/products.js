const express = require('express');


//invoke  router
const router = express.Router()

const {getAllProducts, getAllProductsStatic }    = require('../controllers/products')
  
//append  '/' to the default router   
// '/api/v1/products/static'
router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);


//export all the routers
module.exports = router 
    