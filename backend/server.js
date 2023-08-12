import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import categoryItems from './data/categoryItems.js'
import capsRouter from './routes/capsRoute.js'
import teesRouter from './routes/teesRoute.js'
import tshirtsRouter from './routes/tshirtsRoute.js'
import hoodiesRouter from './routes/hoodiesRoute.js'
import knitwearsRouter from './routes/knitwearsRoute.js'
import footwearsRouter from './routes/footwearsRoute.js'
import setsRouter from './routes/setsRoute.js'
import pantsRouter from './routes/pantsRoute.js'
import shortsRouter from './routes/shortsRoute.js'
import newArrivalsRouter from './routes/newArrivalsRoute.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})
app.get('/api/categoryItems', (req, res) => {
  res.json(categoryItems)
})

app.use('/api/categoryItems/caps', capsRouter)

app.use('/api/categoryItems/tees', teesRouter)

app.use('/api/categoryItems/tshirts', tshirtsRouter)

app.use('/api/categoryItems/hoodies', hoodiesRouter)

app.use('/api/categoryItems/knitwears', knitwearsRouter)

app.use('/api/categoryItems/footwears', footwearsRouter)

app.use('/api/categoryItems/sets', setsRouter)

app.use('/api/categoryItems/pants', pantsRouter)

app.use('/api/categoryItems/shorts', shortsRouter)

app.use('/api/categoryItems/newArrivals', newArrivalsRouter)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
