import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <>
        
            <div className="service_container">
                <div className="service_box">
                    <Link to="/work">WORK</Link>
                </div>
                <div className="service_box">
                    <Link to="/hire">HIRE</Link>
                </div>
                
            </div>
        </>
    )
}
