import React from 'react'

const ProductInfo = () => {
    const Product = {
        name: "Laptop",
        price: 1200,
        avalability: "In Stock",
    };
  return (
    <div>
        <h1>Name: {Product.name}</h1>
        <h1>Price: ${Product.price}</h1>
        <h1>Availability: {Product.avalability}</h1>
    </div>
  )
}

export default ProductInfo