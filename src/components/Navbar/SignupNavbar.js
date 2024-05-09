import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'


import './Navbar.css'


export default function SignupNavbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/Home">
                    <img src={logo} alt="logo" />
                    <p>FreeLancing Website</p>
                </Link>
                <nav>
                    <label htmlFor="burger"><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" name="burger" id="burger" />
                    <ul>
                        <li>
                            <Link to="/Services">Services</Link>
                        </li>
                        <li>
                            <i class="fa-regular fa-user"></i>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}