import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all hoodie items
// @route  GET /api/categoryItems/hoodies
// @access Public

const getHoodies = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const itemPageSize = 6
  const itemPage = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments()

  const hoodieItems = await Product.find({ category: 'Hoodies', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ hoodieItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
