//  controller funcs  for all the  business Logic Here
  
const getAllProductsStatic = async(req,resp) => {
    throw new Error('testing async errors'); 
  //return  JSON FILE
   resp.status(200).json({msg: `products testing routes`}) 
   
}

const getAllProducts = async(req, resp) => {
    //return  json as response
  resp.status(200).json({msg: `products  routes`}) 
  
}


module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
