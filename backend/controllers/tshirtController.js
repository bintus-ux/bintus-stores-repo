import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all tshirt items
// @route  GET /api/categoryItems/tshirts
// @access Public

const getTshirts = asyncHandler(async (req, res) => {
  const tshirtProducts = await Product.find({ category: 'Tshirts' })

  res.json(tshirtProducts)
})

// @desc   Get single tshirt item
// @route  GET /api/categoryItems/tshirts/:id
// @access Public
const getTshirtById = asyncHandler(async (req, res) => {
  const tshirt = await Product.findById(req.params.id)

  if (tshirt) {
    res.json(tshirt)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getTshirts, getTshirtById }
