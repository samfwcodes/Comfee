import icedLatte from "../assets/iced-latte.png"
import Button from "./Button"


const ProductCard = ({products}) => {

  const allCards = products.map((coffee) => {
    return (
      <div className="card" key={coffee._id}>

      <div className="img-wrapper">
        <img src={icedLatte} alt="" />
      </div>

      <div className="card-content">
        <h2>{coffee.name}</h2>

        <p>
          {coffee.description}
        </p>

        <Button to={`/product/${coffee._id}`} content='Shop Now'/>
      </div>

    </div>
    )
  })
  return allCards
}

export default ProductCard