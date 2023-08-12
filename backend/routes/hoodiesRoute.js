import express from 'express'
import asyncHandler from 'express-async-handler'
const hoodiesRouter = express.Router()
import Product from '../models/productModel.js'

// @desc   Fetch all hoodie items
// @route  GET /api/categoryItems
// @access Public

hoodiesRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const hoodieProducts = await Product.find({ category: 'Hoodies' })

    res.json(hoodieProducts)
  })
)

hoodiesRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const hoodie = await Product.findById(req.params.id)

    if (hoodie) {
      res.json(hoodie)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default hoodiesRouter
