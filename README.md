# Express TypeScript Basic Server
Express TypeScript Basic Server is a starter project with sample endpoints to create and retrieve products. The app is
written in Node, Express (TypeScript), MongoDB and Jest.

## Requirements
- Node 14.17.4 LTS
- NPM 6.x

## Installation
```bash
npm install
```

## How to run
### Local
To run the app in development mode locally, run the below command on the root directory:
```bash
npm run dev
```
An express server will spin up on `http://localhost:5000/` and from there by you are hitting
the end point to post your payload.

### Usage
#### Create a new product

`POST: api/v1/products`

Payload
```bash
{
    "name": "product1",
    "price": 200,
    "isAvailable": true
}
```

#### Retrieving all products
`GET: api/v1/products`

The endpoints can be tested with [postman](https://www.postman.com/) or [insomnia](https://insomnia.rest/).

## How to run tests
Run all tests (both unit and integration)
```bash
npm run test
```
