import { useState, useEffect } from "react"
import Heading from "../components/Heading"
import ProductCard from "../components/ProductCard"
const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState()



  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/coffee/")

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        const fetchData = await res.json()
        setProducts(fetchData)
        setError()
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCoffee()
  }, [])

  
  if (error) return (
    <section className="product-page flex center">
      <h1 className="text-dark loading">{error}</h1>
    </section>
  )
  if (loading) return (
    <section className="product-page flex center">
      <h1 className="text-dark loading">Loading...</h1>
    </section>
  )




  return (
    <section className="product-page">
      <Heading text='Buy Coffee' />
      <div className='flex product-container'>
        <ProductCard products={products} />
      </div>
    </section>
  )
}

export default ProductPage