import express from 'express'
import asyncHandler from 'express-async-handler'
const footwearsRouter = express.Router()
import Product from '../models/productModel.js'

// @desc   Fetch all footwear items
// @route  GET /api/categoryItems
// @access Public

footwearsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const footwearProducts = await Product.find({ category: 'Footwears' })

    res.json(footwearProducts)
  })
)

footwearsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const footwear = await Product.findById(req.params.id)

    if (footwear) {
      res.json(footwear)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default footwearsRouter
