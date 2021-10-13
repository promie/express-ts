import { Document } from 'mongoose'

export type IProductResp = Pick<
  IProduct,
  'id' | 'name' | 'price' | 'isAvailable'
>

export interface IProduct extends Document {
  name: string
  price: number
  isAvailable: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
