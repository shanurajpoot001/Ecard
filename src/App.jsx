import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import Sidebar from './Sidebar'

import './App.css'

const Products = [
    {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.49,
    oldPrice: 350.99,
    image: "/images/shoes.jpg",
    tag: "HOT"
  },
  {
    id: 2,
    name: "Adidas Men Running Sneakers",
    price: 249.99,
    oldPrice: 299.99,
    image: "/images/shoes.jpg",
    tag: "NEW"
  },
  {
    id: 3,
    name: "Casual Bag",
    price: 199.49,
    oldPrice: 220.99,
   image: "/images/shoes.jpg",

    tag: "HOT"
  },
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.49,
    oldPrice: 350.99,
    image: "/images/shoes.jpg",
    tag: "HOT"
  },
  {
    id: 2,
    name: "Adidas Men Running Sneakers",
    price: 249.99,
    oldPrice: 299.99,
    image: "/images/shoes.jpg",
    tag: "NEW"
  },
  {
    id: 3,
    name: "Casual Bag",
    price: 199.49,
    oldPrice: 220.99,
   image: "/images/shoes.jpg",

    tag: "HOT"
  },
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.49,
    oldPrice: 350.99,
    image: "/images/shoes.jpg",
    tag: "HOT"
  },
  {
    id: 2,
    name: "Adidas Men Running Sneakers",
    price: 249.99,
    oldPrice: 299.99,
    image: "/images/shoes.jpg",
    tag: "NEW"
  },
  {
    id: 3,
    name: "Casual Bag",
    price: 199.49,
    oldPrice: 220.99,
   image: "/images/shoes.jpg",

    tag: "HOT"
  },
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.49,
    oldPrice: 350.99,
    image: "/images/shoes.jpg",
    tag: "HOT"
  },
  {
    id: 2,
    name: "Adidas Men Running Sneakers",
    price: 249.99,
    oldPrice: 299.99,
    image: "/images/shoes.jpg",
    tag: "NEW"
  },
  {
    id: 3,
    name: "Casual Bag",
    price: 199.49,
    oldPrice: 220.99,
   image: "/images/shoes.jpg",

    tag: "HOT"
  }
];

function App() {
  
  return (
     <div>
      {/* Navbar */}
      <Navbar />

      {/* Main container with sidebar + product grid */}
      <div className="container">
        <Sidebar />

        <main className="main">
          <h2>Product List</h2>
          <div className="product-grid">
            {Products.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
