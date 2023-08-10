import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import categoryItems from './data/categoryItems.js'
import {
  teesItems,
  tshirtItems,
  hoodiesItems,
  knitwearItems,
  footwearItems,
  setsItems,
  pantsItems,
  shortItems,
  newArrivals,
} from './data/products.js'
import capsRouter from './routes/capsRoute.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/api/categoryItems/caps', capsRouter)

app.get('/api/categoryItems', (req, res) => {
  res.json(categoryItems)
})

app.get('/api/categoryItems/tees', (req, res) => {
  res.json(teesItems)
})

app.get('/api/categoryItems/tees/:id', (req, res) => {
  const tees = teesItems.find((p) => p.linkName === req.params.id)
  res.json(tees)
})

app.get('/api/categoryItems/tshirts', (req, res) => {
  res.json(tshirtItems)
})

app.get('/api/categoryItems/tshirts/:id', (req, res) => {
  const tshirt = tshirtItems.find((p) => p.linkName === req.params.id)
  res.json(tshirt)
})

app.get('/api/categoryItems/hoodies', (req, res) => {
  res.json(hoodiesItems)
})

app.get('/api/categoryItems/hoodies/:id', (req, res) => {
  const hoodie = hoodiesItems.find((p) => p.linkName === req.params.id)
  res.json(hoodie)
})

app.get('/api/categoryItems/knitwears', (req, res) => {
  res.json(knitwearItems)

  app.get('/api/categoryItems/knitwears/:id', (req, res) => {
    const knitwear = knitwearItems.find((p) => p.linkName === req.params.id)
    res.json(knitwear)
  })
})
app.get('/api/categoryItems/footwears', (req, res) => {
  res.json(footwearItems)
})

app.get('/api/categoryItems/footwears/:id', (req, res) => {
  const footwear = footwearItems.find((p) => p.linkName === req.params.id)
  res.json(footwear)
})

app.get('/api/categoryItems/sets', (req, res) => {
  res.json(setsItems)
})

app.get('/api/categoryItems/sets/:id', (req, res) => {
  const set = setsItems.find((p) => p.linkName === req.params.id)
  res.json(set)
})

app.get('/api/categoryItems/pants', (req, res) => {
  res.json(pantsItems)
})

app.get('/api/categoryItems/pants/:id', (req, res) => {
  const pant = pantsItems.find((p) => p.linkName === req.params.id)
  res.json(pant)
})

app.get('/api/categoryItems/shorts', (req, res) => {
  res.json(shortItems)
})

app.get('/api/categoryItems/shorts/:id', (req, res) => {
  const short = shortItems.find((p) => p.linkName === req.params.id)
  res.json(short)
})

app.get('/api/categoryItems/New-Arrivals/:id', (req, res) => {
  const newArrival = newArrivals.find((p) => p.linkName === req.params.id)
  res.json(newArrival)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
