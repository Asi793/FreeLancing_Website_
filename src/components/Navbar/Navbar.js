import {Link, Route, Routes } from "react-router-dom";
import logo from '../../assets/logo.jpg'

import './Navbar.css'

import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Services from "../Services";
import Work from '../Work/Work'
import Hire from "../Hire/Hire";
import Postajob from "../Hire/Postajob";
import Findajob from '../Work/findajob'
import listofjobs from '../Hire/listofjobs'
import completedjobs from '../Work/completedjobs'

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
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/SignUp">SignUp</Link></li>
                        <li><Link to="/Profile">Profile</Link></li>
                    </ul>
                </nav>
            </div>



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Work" element={<Work />} />
                <Route path="/Hire" element={<Hire />} />
                <Route path="/Postajob" element={<Postajob />} />
                <Route path="/Findajob" element={<Findajob />} />
                <Route path="/listofjobs" element={<listofjobs />} />
                <Route path="/completedjobs" element={<completedjobs />} />
            </Routes>
        </>
    )
}