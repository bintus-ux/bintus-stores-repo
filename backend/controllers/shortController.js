import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all short items
// @route  GET /api/categoryItems/shorts
// @access Public

const getShorts = asyncHandler(async (req, res) => {
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

  const shortItems = await Product.find({ category: 'Shorts', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ shortItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
