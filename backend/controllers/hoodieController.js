import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all hoodie items
// @route  GET /api/categoryItems/hoodies
// @access Public

const getHoodies = asyncHandler(async (req, res) => {
  const hoodieProducts = await Product.find({ category: 'Hoodies' })

  res.json(hoodieProducts)
})

// @desc   Get single hoodie item
// @route  GET /api/categoryItems/hoodies/:id
// @access Public
const getHoodieById = asyncHandler(async (req, res) => {
  const hoodie = await Product.findById(req.params.id)

  if (hoodie) {
    res.json(hoodie)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getHoodies, getHoodieById }
