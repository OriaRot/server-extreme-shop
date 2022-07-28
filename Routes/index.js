// const { application } = require('express')
const express = require('express')
const router = express.Router()

const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')

router.use('/products', productsRouter)
router.use('/user', userRouter)

module.exports = router