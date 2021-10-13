import { Product } from '../models'
import { IProduct, IProductResp } from '../types/product'

const createProduct = async (body: IProduct): Promise<IProductResp> => {
  const product = await Product.create(body)

  return {
    id: product._id,
    name: product.name,
    price: product.price,
    isAvailable: product.isAvailable,
  }
}

const getProducts = async (): Promise<IProductResp[]> => {
  const products = await Product.find({}).exec()

  return products.map((product: IProduct) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      isAvailable: product.isAvailable,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }
  })
}

export default {
  createProduct,
  getProducts,
}
