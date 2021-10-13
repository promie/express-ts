import { ProductRepository } from '../repositories'
import { IProduct, IProductResp } from '../types/product'

const createProduct = (body: IProduct): Promise<IProductResp> => {
  return ProductRepository.createProduct(body)
}

const getProducts = (): Promise<IProductResp[]> => {
  return ProductRepository.getProducts()
}

export default {
  createProduct,
  getProducts,
}
