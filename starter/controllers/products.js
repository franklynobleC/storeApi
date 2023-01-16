//  controller funcs  for all the  business Logic

const getAllProductsStatic = async(req,resp) => {
     //return  JSON FILE
   resp.status(200).json({msg: `products testing routes`}) 
   
}



const getAllProducts = async(req, resp) => {
    //return  JSON FILE
  resp.status(200).json({msg: `products  routes`}) 
  
}


module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
