import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all footwear items
// @route  GET /api/categoryItems/footwears
// @access Public

const getFootwears = asyncHandler(async (req, res) => {
  const footwearProducts = await Product.find({ category: 'Footwears' })

  res.json(footwearProducts)
})

// @desc   Get single footwear item
// @route  GET /api/categoryItems/footwears/:id
// @access Public
const getFootwearById = asyncHandler(async (req, res) => {
  const footwear = await Product.findById(req.params.id)

  if (footwear) {
    res.json(footwear)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getFootwears, getFootwearById }
