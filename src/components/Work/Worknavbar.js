import './Work.css'
import { Link } from 'react-router-dom';


export default  function Worknavbar() {
    return (
        <>
            <div className="work_container">
                <nav>
                    <div className="nav_item">
                        <Link to="/Work">Current Jobs</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/Findajob">Find a Job</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/completedjobs">Completed Jobs</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

