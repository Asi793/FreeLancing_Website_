import {Link, Route, Routes } from "react-router-dom";
import logo from '../../assets/logo.jpg'

import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Login from '../Login/Login'

import './Navbar.css'


export default function Navbar() {
    return (
        <>

            <div className="navbar">
                <Link to="/Home">
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    <label htmlFor="burger"><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" name="burger" id="burger" />
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </nav>
            </div>



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </>
    )
}