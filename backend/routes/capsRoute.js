import express from 'express'
import asyncHandler from 'express-async-handler'
const capsRouter = express.Router()
import Product from '../models/productModel.js'

capsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const capProducts = await Product.find({})

    res.json(capProducts)
  })
)

capsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const cap = await Product.findById(req.params.id)

    if (cap) {
      res.json(cap)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default capsRouter
