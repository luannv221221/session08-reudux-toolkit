import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ProductDetail from './ProductDetail'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import ProductSearch from './ProductSearch'


function App() {

  return (
    <>
      <Header />
      {/* <ProductDetail /> */}
      <Routes>
        <Route path='/' index element={<Home></Home>}></Route>
        <Route path='/category' element={<Category></Category>}></Route>
        <Route path='/search' element={<ProductSearch></ProductSearch>}></Route>
      </Routes>
    </>
  )
}

export default App
