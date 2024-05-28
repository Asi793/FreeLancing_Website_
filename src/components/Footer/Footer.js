import './Footer.css'
import { Link } from 'react-router-dom';
import ContactPage from '../Contact/Contact'


export default function Footer() {
    return (
        <>
            <footer>
                <div className="categorires">
                    <h1>Ctogeries</h1>
                    <Link to="/lifestyle" className='links'>Life Style</Link>
                    <Link to="/GraphicDesign" className='links'>Graphics and Design</Link>
                    <Link to="/DigitalMarketing" className='links'>Digital Marketing</Link>
                    <Link to="/Data" className='links'>Data</Link>
                    
                </div>
                <div className="foo foo_2">
                    <div className="icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-whatsapp"></i>  
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="foo foo_3">
                    <a href="./contact">contact us</a>
                </div>

                
                    <p>&copy; 2024 Freelance Website. All rights reserved.</p>
                

            </footer>
        </>
    )
}
