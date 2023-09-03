import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all footwear items
// @route  GET /api/categoryItems/footwears
// @access Public

const getFootwears = asyncHandler(async (req, res) => {
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

  const footwearItems = await Product.find({
    category: 'Footwears',
    ...keyword,
  })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ footwearItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
