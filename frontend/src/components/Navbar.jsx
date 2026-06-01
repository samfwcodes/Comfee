import navLogo from "../assets/nav-logo.svg"
import { Link } from "react-router"



const Navbar = () => {
  return (
    <nav className="flex bg-light">
        <div className="center flex nav-left">
            <img className="nav-logo" src={navLogo} alt="nav-logo" />
            <span className="nav-logo-text decoration-font text-dark">Comfee</span>
        </div>
        <div className="nav-center flex">
            <Link className="text-dark" to='/'>Home</Link>
            <Link className="text-dark" to='/product'>Product</Link>
            <Link className="text-dark" to='/'>About</Link>
            <Link className="text-dark" to='/'>FAQs</Link>
        </div>
        <div className="right">
            <button className="cta-secondary">Contact Us</button>
        </div>


    </nav>
  )
}

export default Navbar