import express from 'express'
import { ProductController } from '../controllers'

const router = express.Router()

router.route('/').post(ProductController.createProduct)
router.route('/').get(ProductController.getProducts)

export default router
