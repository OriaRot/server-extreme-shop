const axios = require("axios");
const productController = require('../DL/controllers/productController')
async function getPruducts() {
  const result = await productController.read()
  return result
}

// async function createMyData(productArray){
//   productArray.forEach(product => {
//   productController.create(product)
// });
// }





module.exports = { getPruducts };
