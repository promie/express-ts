import request from 'supertest'
import app from '../../app'
import mongoose from 'mongoose'
import { Product } from '../../models'
import httpStatus from 'http-status'

afterAll(() => {
  mongoose.connection.db.dropDatabase().then(() => {
    mongoose.connection.close()
  })
})

describe('ProductController', () => {
  describe('Product creation', () => {
    it('returns a 201 CREATED when product is successfully created', async () => {
      await request(app)
        .post('/api/v1/products')
        .send({
          name: 'test product',
          price: 200,
          isAvailable: true,
        })
        .expect(httpStatus.CREATED)
    })

    it('returns a success of true when product is successfully created', async () => {
      const resp = await request(app).post('/api/v1/products').send({
        name: 'test product',
        price: 200,
        isAvailable: true,
      })

      expect(resp.body.success).toBe(true)
    })

    it('saves the new product to the database', async () => {
      await request(app).post('/api/v1/products').send({
        name: 'save db',
        price: 200,
        isAvailable: true,
      })

      const product = await Product.find({ name: 'save db' })

      expect(product.length).toBe(1)
    })
  })

  describe('Products retrieval', () => {
    beforeEach(async () => {
      // Drop database
      await mongoose.connection.db.dropDatabase()
    })

    it('returns a 200 OK when the list of products is successfully retrieved', async () => {
      await request(app).get('/api/v1/products').expect(httpStatus.OK)
    })

    it('retrieves the newly created product with correct values', async () => {
      await request(app).post('/api/v1/products').send({
        name: 'product 1',
        price: 200,
        isAvailable: true,
      })

      const response = await request(app).get('/api/v1/products')
      const product = response.body.products[0]

      expect(product.name).toBe('product 1')
      expect(product.price).toBe(200)
      expect(product.isAvailable).toBe(true)
    })

    it('retrieves the correct number of products created in the database', async () => {
      await request(app).post('/api/v1/products').send({
        name: 'product 1',
        price: 200,
        isAvailable: true,
      })

      await request(app).post('/api/v1/products').send({
        name: 'product 2',
        price: 200,
        isAvailable: true,
      })

      const response = await request(app).get('/api/v1/products')
      expect(response.body.products.length).toBe(2)
    })

    it('returns the correct fields on the response body', async () => {
      await request(app).post('/api/v1/products').send({
        name: 'product 1',
        price: 200,
        isAvailable: true,
      })

      const response = await request(app).get('/api/v1/products')
      const product = response.body.products[0]

      expect(Object.keys(product)).toEqual([
        'id',
        'name',
        'price',
        'isAvailable',
        'createdAt',
        'updatedAt',
      ])
    })
  })
})
