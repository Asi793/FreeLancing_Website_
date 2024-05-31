import { Link } from 'react-router-dom';

export default function Category_Services() {
    return (
        <>
        
            <div className="service_container">
                <div className="service_box">
                    <Link to="/lifestyle">Life Style</Link>
                </div>
                <div className="service_box">
                    <Link to="/Grafic_And_Design">Grafic And Design</Link>
                </div>
                <div className="service_box">
                    <Link to="/Digital_Marketing">Digital Marketing</Link>
                </div>
                <div className="service_box">
                    <Link to="/Data">Data</Link>
                </div>
                
            </div>
        </>
    )
}