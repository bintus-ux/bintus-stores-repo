import express from 'express'
import asyncHandler from 'express-async-handler'
const knitwearsRouter = express.Router()
import Product from '../models/productModel.js'

// @desc   Fetch all knitwear items
// @route  GET /api/categoryItems
// @access Public

knitwearsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const knitwearProducts = await Product.find({ category: 'Knitwears' })

    res.json(knitwearProducts)
  })
)

knitwearsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const knitwear = await Product.findById(req.params.id)

    if (knitwear) {
      res.json(knitwear)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default knitwearsRouter
