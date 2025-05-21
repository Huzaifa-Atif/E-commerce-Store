import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Products = ({ searchTerm }) => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log("response", response.data);
      
      setApiData(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }


  const filteredData = apiData.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , padding: "20px"}}>
      {filteredData.length === 0 ? (
        <p>no products found....</p>
      ) : (
        filteredData.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '120%', height: '230px', objectFit: 'cover' }} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* <button className="bg-black text-white">Add To Cart</button> */}
          </div>
        ))
      )}
    </div>
  )
}
export default Products