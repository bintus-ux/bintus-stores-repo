const express = require('express')
const categoryItems = require('./data/categoryItems')
const {
  teesItems,
  tshirtItems,
  capItems,
  hoodiesItems,
  knitwearItems,
  footwearItems,
  setsItems,
  pantsItems,
  shortItems,
} = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/categoryItems', (req, res) => {
  res.json(categoryItems)
})

app.get('/api/categoryItems/tees', (req, res) => {
  res.json(teesItems)
})

app.get('/api/categoryItems/tees/:id', (req, res) => {
  const teesItem = teesItems.find((p) => p.linkName === req.params.id)
  res.json(teesItem)
})

app.get('/api/categoryItems/caps', (req, res) => {
  res.json(capItems)
})

app.get('/api/categoryItems/caps/:id', (req, res) => {
  const cap = capItems.find((p) => p.linkName === req.params.id)
  res.json(cap)
})

app.get('/api/categoryItems/tshirts', (req, res) => {
  res.json(tshirtItems)
})
app.get('/api/categoryItems/hoodies', (req, res) => {
  res.json(hoodiesItems)
})
app.get('/api/categoryItems/knitwears', (req, res) => {
  res.json(knitwearItems)
})
app.get('/api/categoryItems/footwears', (req, res) => {
  res.json(footwearItems)
})
app.get('/api/categoryItems/sets', (req, res) => {
  res.json(setsItems)
})
app.get('/api/categoryItems/pants', (req, res) => {
  res.json(pantsItems)
})
app.get('/api/categoryItems/shorts', (req, res) => {
  res.json(shortItems)
})

app.listen(5000, console.log('Server running on port 5000'))
