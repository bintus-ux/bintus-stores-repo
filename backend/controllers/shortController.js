import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all short items
// @route  GET /api/categoryItems/shorts
// @access Public

const getShorts = asyncHandler(async (req, res) => {
  const shortProducts = await Product.find({ category: 'Shorts' })

  res.json(shortProducts)
})

// @desc   Get single short item
// @route  GET /api/categoryItems/shorts/:id
// @access Public
const getShortById = asyncHandler(async (req, res) => {
  const short = await Product.findById(req.params.id)

  if (short) {
    res.json(short)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getShorts, getShortById }
