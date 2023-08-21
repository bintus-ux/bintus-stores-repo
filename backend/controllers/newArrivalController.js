import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all newArrival items
// @route  GET /api/categoryItems/newArrivals
// @access Public

const getNewArrivals = asyncHandler(async (req, res) => {
  const newArrivalProducts = await Product.find({}).limit(7)
  console.log(newArrivalProducts)
  res.json({ data: newArrivalProducts })
})

// @desc   Get single newArrival item
// @route  GET /api/categoryItems/newArrivals/:id
// @access Public
const getNewArrivalById = asyncHandler(async (req, res) => {
  const newArrival = await Product.findById(req.params.id)

  if (newArrival) {
    res.json(newArrival)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})
export { getNewArrivals, getNewArrivalById }
