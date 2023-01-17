  // const { query } = require('express')
const Product = require('../models/modelsProducts')

//  controller funcs  for all the  business Logic Here
  
const getAllProductsStatic = async(req,resp) => {
    // throw new Error('testing async errors'); 
       const search = 'ab'  
    const Products = await Product.find({
      name: {$regex:search, $options: 'i'},  //'i' stands for case  insenitive
      // page: '2', 
    }) 
  //return  JSON FILE
   resp.status(200).json({msg: Products}) 
   
}

const getAllProducts = async(req, resp) => {
  // the distructured value  must match what is in the  model, eg, company featured 
  const {featured, company, name} =  req.query; 
const queryObject = {}  // declare an  empty object


//filter  by company name and featured
if (featured) {
  queryObject.featured = featured === 'true' ? true : false
} 

if(company) {
  queryObject.company = company
}

if (name) {
  queryObject.name = {$regex: name, $options: 'i' } 
}
  console.log(queryObject)    
const products = await Product.find(queryObject)

    //return  json as response
  resp.status(200).json({products, nbHits: products.length}) 
  
}


module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
