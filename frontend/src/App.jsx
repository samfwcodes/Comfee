import {Routes, Route, Link } from 'react-router'
import EditProduct from './pages/EditProduct'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'



const App = () => {
  return (
    <div>
      <nav>
        <Link to='/product/edit'>Edit</Link>
        <Link to='/product'>Product</Link>
      </nav>
      <Routes>
        <Route path='/product/edit' element={<EditProduct />} />
        <Route path='/product/detail' element={<ProductDetail />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App