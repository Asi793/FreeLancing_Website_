
import { Link } from 'react-router-dom'
import './Hire.css'

export default function Hirenavbar() {
    return (
        <>
            <div className="hire_container">
                <nav>
                    <div className="nav_item">
                        <Link to="/hire">My Hirings</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/postajob">Post a job</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/listofjobs">List Of Jobs</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}