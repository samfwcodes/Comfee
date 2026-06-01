import {Routes, Route, } from 'react-router'
import EditProduct from './pages/EditProduct'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/edit' element={<EditProduct />} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/product' element={<ProductPage/>} />
    </Routes>
    </>
  )
}

export default App