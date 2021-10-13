import { IProduct } from '../types/product'
import { Model, model, Schema } from 'mongoose'

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
)

const Product = model<IProduct>('Product', ProductSchema)

export default Product
