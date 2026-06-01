import { Link } from "react-router"

const Button = (props) => {
  return (
    <Link className="cta-product-page" to={props.to}>
          {props.content}
        </Link>
  )
}

export default Button