import express from 'express'
const newArrivalsRouter = express.Router()
import {
  getNewArrivals,
  getNewArrivalById,
} from '../controllers/newArrivalController.js'

newArrivalsRouter.route('/new-arrivals').get(getNewArrivals)

newArrivalsRouter.route('/New-Arrivals/:id').get(getNewArrivalById)

export default newArrivalsRouter
