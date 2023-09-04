import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all knitwear items
// @route  GET /api/categoryItems/knitwears
// @access Public

const getKnitwears = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const pageSize = 6
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({ category: 'Knitwears' })

  const knitwearItems = await Product.find({
    category: 'Knitwears',
    ...keyword,
  })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ knitwearItems, page, pages: Math.ceil(count / pageSize) })
})

// @desc   Get single knitwear item
// @route  GET /api/categoryItems/knitwears/:id
// @access Public
const getKnitwearById = asyncHandler(async (req, res) => {
  const knitwear = await Product.findById(req.params.id)

  if (knitwear) {
    res.json(knitwear)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getKnitwears, getKnitwearById }
