import Heading from "../components/Heading"
import ProductCard from "../components/ProductCard"
const ProductPage = () => {
  return (
    <div>
      <Heading text='Buy Coffee' />
      <div className='flex product-container'>
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductPage