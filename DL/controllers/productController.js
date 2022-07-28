const productModel = require('../models/productModel')
async function create(data){
    const result = await productModel.create(data)
    return result
}
async function read(_id){
    const result = _id ?
    await productModel.findById(_id) :
    await productModel.find({})
    return result
}
async function update(_id, data){
    const result = await productModel.findByIdAndUpdate(_id, data)
    return result
}
async function del(_id){
    const result = await productModel.findByIdAndDelete(_id)
    return result
}

module.exports = {create, read, update, del}
// const test = {
//     category: "bikes",
//     description: "bla nla bla bla bla",
//     id: 52,
//     image: "http:/cs;cm,ps/;cs,c",
//     price: 123,
//     rating: {
//       count: 12,
//       rate: 2.8,
//     },
//     title: "honda",
//   };
