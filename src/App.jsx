import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cartlist from './Cartlist'


function App() {
  const dispatch=useDispatch();

  return (
    <>
     <h2>
     
       <BrowserRouter>
      <Header/>
         
       <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cartlist' element={<Cartlist/>}/>
      </Routes>
      </BrowserRouter>

   
     </h2>
    </>
  )
}

export default App
