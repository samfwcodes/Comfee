import { useEffect, useState } from "react"
import icedLatte from "../assets/iced-latte.png"
import { Link } from "react-router"

const ProductCard = () => {
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/coffee/")
        const fetchData = await res.json()
        await setData(fetchData)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCoffee()
  },[])
  if (loading) return <h1>Loading...</h1>


  function showDetails (id) {
    const selectedCoffee = data.find((coffee) => {
      return coffee._id === id
    })
    console.log(selectedCoffee)
  }


  const allCards = data.map((coffee) => {
    return (
      <div key={coffee._id} className="flex outer-box">
      <div className="flex inner-box">
        <div className="img-wrapper">
          <img src={icedLatte} alt="product" />
        </div>
        <h1>{coffee.name.toUpperCase()}</h1>
        <p className="description">{coffee.description}</p>
      </div>
      <Link onClick={() => {showDetails(coffee._id)}} className="cta" to='/product/detail'>View Details</Link>
    </div>
    )
  })
  return allCards
}

export default ProductCard