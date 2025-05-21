import { useState } from 'react'
import Products from './components/products'
import './App.css'
import Navbar from './components/navbar'

function App() {
const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <Navbar setSearchTerm={setSearchTerm} />
    <Products searchTerm={searchTerm} />
    </>
  )
}
export default App

