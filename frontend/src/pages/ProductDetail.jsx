import Heading from "../components/Heading";
import { useState, useEffect } from "react"
import icedLatte from "../assets/iced-latte.png";
import { useParams } from "react-router-dom"

const ProductDetail = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)
    const { id } = useParams()
    console.log(id)
  

  useEffect(() => {
      const fetchCoffee = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/coffee/${id}`)
          if (!res.ok) {
            throw new Error(`Request failed: ${res.status}`);
          }
          const fetchData = await res.json()
          setProduct(fetchData)
          setError(null)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
      fetchCoffee()
    }, [id])

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
<section className="info-page-bg">
  <Heading text="Info Page" />

  <div className="info-page">

    {/* Left Side */}
    <div className="image-panel">

      <div className="main-image-card">
        <img
          src={icedLatte}
          alt={product.name}
          className="main-product-image"
        />
      </div>

      <div className="thumbnail-row">
        <div className="thumbnail-card">
          <img className="img1" src={icedLatte} alt="" />
        </div>

        <div className="thumbnail-card">
          <img className="img2" src={icedLatte} alt="" />
        </div>
      </div>

    </div>

    {/* Right Side */}
    <div className="content-panel">

      <div className="product-meta">
        <h1 className="product-title">
          {product.name}
        </h1>

        <span className="product-price">
          ${product.price}
        </span>
      </div>

      <div className="product-details">

        <div className="detail-block">
          <h2>WHAT'S INSIDE</h2>
          <p>{product.ingredients}</p>
        </div>

        <div className="detail-block">
          <h2>WHY WE LOVE IT</h2>
          <p>{product.description}</p>
        </div>

      </div>

      <div className="size-picker">

        <label className="size-option">
          <input type="radio" name="size" value="small" />
          <span>Small</span>
        </label>

        <label className="size-option">
          <input type="radio" name="size" value="medium" />
          <span>Medium</span>
        </label>

        <label className="size-option">
          <input type="radio" name="size" value="large" />
          <span>Large</span>
        </label>

      </div>

      <button className="shop-btn">
        Shop Now
      </button>

    </div>

  </div>
</section>
  )
}

export default ProductDetail