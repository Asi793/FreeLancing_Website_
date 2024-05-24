import './Footer.css'
import ContactPage from '../Contact/Contact'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="categorires">
                    <h1>Ctogeries</h1>
                    <p>Life Style</p>
                    <p>Graphics and Design</p>
                    <p>Digital Marketing</p>
                    <p>Data</p>
                </div>
                <div className="foo foo_2">
                    <div className="icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-whatsapp"></i>  
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
