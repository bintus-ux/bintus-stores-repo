import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all cap items
// @route  GET /api/categoryItems/caps
// @access Public

const getCaps = asyncHandler(async (req, res) => {
  const pageSize = 6
  const page = Number(req.query.pageNumber) || 1
  console.log(page)
  // const keyword = req.query.keyword
  //   ? {
  //       name: {
  //         $regex: req.query.keyword,
  //         $options: 'i',
  //       },
  //     }
  //   : ''

  const count = await Product.count({ category: 'Caps' })
  const capItems = await Product.find({ category: 'Caps' })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  console.log(page, Math.ceil(count / pageSize))
  res.json({ capItems, page, pages: Math.ceil(count / pageSize) })
})

// @desc   Get single cap item
// @route  GET /api/categoryItems/caps/:id
// @access Public
const getCapById = asyncHandler(async (req, res) => {
  const cap = await Product.findById(req.params.id)

  if (cap) {
    res.json(cap)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getCaps, getCapById }
