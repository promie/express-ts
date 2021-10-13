import { Request, Response, NextFunction } from 'express'
import { ProductService } from '../services'
import httpStatus from 'http-status'
import { catchAsync } from '../utils'

const createProduct = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const product = await ProductService.createProduct(req.body)
    return res.status(httpStatus.CREATED).json({
      success: true,
      product,
    })
  },
)

const getProducts = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const products = await ProductService.getProducts()
    return res.status(httpStatus.OK).json({
      success: true,
      products,
    })
  },
)

export default {
  createProduct,
  getProducts,
}
