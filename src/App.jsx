import { useState } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Details from "./pages/Details"
import Checkout from "./pages/Checkout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />}  />
    <Route path="category/:name" element={<Category/>} /> 
    <Route path="details/:id" element={<Details />} /> 
    <Route path="checkout" element={<Checkout />} />  
  </Route>
))


function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
