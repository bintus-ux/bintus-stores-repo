import express from 'express'
import asyncHandler from 'express-async-handler'
const setsRouter = express.Router()
import Product from '../models/productModel.js'

setsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const setProducts = await Product.find({ category: 'Sets' })

    res.json(setProducts)
  })
)

setsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const set = await Product.findById(req.params.id)

    if (set) {
      res.json(set)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default setsRouter
