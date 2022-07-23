import logo from "../Navbar/assets/images/logo.svg"
import "../Navbar/assets/css/Navbar.css"
export default function Navbar() {
  return (
    <nav>
        <img className="nav--logo" src={logo}  alt="logo"/>
        <p className="nav--title">Meme Generator</p>
    </nav>
  )
}
