import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all tshirt items
// @route  GET /api/categoryItems/tshirts
// @access Public

const getTshirts = asyncHandler(async (req, res) => {
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

  const tshirtItems = await Product.find({ category: 'Tshirts', ...keyword })
    .limit(itemPageSize)
    .skip(itemPageSize * (itemPage - 1))

  res.json({ tshirtItems, itemPage, pages: Math.ceil(count / itemPageSize) })
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
