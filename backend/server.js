import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import categoryItems from './data/categoryItems.js'
import newArrivalsRouter from './routes/newArrivalsRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import productRouter from './routes/productRoute.js'
// import Stripe from 'stripe';(process.env.STRIPE_PRIVATE_KEY)

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})
app.get('/api/categoryItems', (req, res) => {
  res.json(categoryItems)
})

app.use('/api/product', productRouter)

app.use('/api/categoryItems', newArrivalsRouter)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
