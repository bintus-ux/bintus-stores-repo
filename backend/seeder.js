import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import categoryItems from './data/categoryItems.js'
// import sets from './data/sets.json' assert { type: 'json' }
// import tees from './data/tees.json' assert { type: 'json' }
import {
  teesItems,
  capItems,
  tshirtItems,
  newArrivals,
  setsItems,
  pantsItems,
  hoodiesItems,
  knitwearItems,
  footwearItems,
} from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

// import fs from 'fs'
// const jsonData = fs.readFileSync(sets, 'utf8')
// const data = JSON.parse(jsonData)

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const newItem = newArrivals.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(newItem)

    const teesItem = teesItems.map((product) => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(teesItem)

    const capsItem = capItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(capsItem)

    const pantsItem = pantsItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(pantsItem)

    const tshirtsItem = tshirtItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(tshirtsItem)

    const hoodiesItem = hoodiesItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(hoodiesItem)

    const knitwearsItem = knitwearItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(knitwearsItem)

    const setsItem = setsItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(setsItem)

    const footwearsItem = footwearItems.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(footwearsItem)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
