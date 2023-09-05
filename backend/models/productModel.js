import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    desc_texture: {
      type: String,
    },
    desc_weight: {
      type: String,
    },
    desc_info: {
      type: String,
    },
    desc_1: {
      type: String,
    },
    desc_2: {
      type: String,
    },
    desc_3: {
      type: String,
    },
    price: {
      type: String,
      required: true,
      default: '0',
    },
    info: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
