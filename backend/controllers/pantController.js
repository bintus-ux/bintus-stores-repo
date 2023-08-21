import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all pant items
// @route  GET /api/categoryItems/pants
// @access Public

const getPants = asyncHandler(async (req, res) => {
  const pantProducts = await Product.find({ category: 'Pants' })

  res.json(pantProducts)
})

// @desc   Get single pant item
// @route  GET /api/categoryItems/pants/:id
// @access Public
const getPantById = asyncHandler(async (req, res) => {
  const pant = await Product.findById(req.params.id)

  if (pant) {
    res.json(pant)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getPants, getPantById }
