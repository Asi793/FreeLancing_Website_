import Category_Services from '../workcategories'
import CategoriesNavbar from './CategoriesNavbar'
import './Work.css'
import Worknavbar from './Worknavbar'

export default function Work() {
    return (
        <>
            <Worknavbar />
            <CategoriesNavbar />
            

            <div className="find_jobs" id='find_jobs'>
                <h1>Current Jobs</h1>
                <br />
                <div className="all_job_posts">
                <div className="job">
                        <p id="job-postedTime">posted 1 hours ago</p>
                        <div id="job-desc">
                            <p><b>--</b> we want a Travel Writer,Travel Agent for planning trip.</p>
                        </div>
                        <p id="job-skills">SKILLS: Life Style </p>
                        <p id='job-time'>Time:3 hours  </p>
                        <p id='job-budget'>BUDGET: 5000 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 2 hours ago</p>
                        <div id="job-desc">
                            <p> <b>--</b> I want Fashion Designers for Custom clothing design, pattern making.</p>
                        </div>
                        <p id="job-skills">SKILLS:Fashion Designer </p>
                        <p id='job-time'>Time:2 days </p>
                        <p id='job-budget'>BUDGET: 3000 </p>
                    </div><div className="job">
                        <p id="job-postedTime">posted 3 hours ago</p>
                        
                        <div id="job-desc">
                            <p>  <b>--</b> I want Fitness Instructors for Online personal training, group fitness classes, yoga instructors   </p>
                        </div>
                        <p id="job-skills">SKILLS: Fitness trainer </p>
                        <p id='job-time'>Time: 1 week </p>
                        <p id='job-budget'>BUDGET: 10000 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 4 hours ago</p>
                        
                        <div id="job-desc">
                            <p> <b>--</b>  Designing website layouts and user interfaces (UI) for desktop and mobile platforms   </p>
                        </div>
                        <p id="job-skills">SKILLS: Web Designer</p>
                        <p id='job-time'>Time: 5 hours</p>
                        <p id='job-budget'>BUDGET: 1000 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 5 hours ago</p>
                        
                        <div id="job-desc">
                            <p> <b>--</b> Designing layouts for books, magazines, and other publications   </p>
                        </div>
                        <p id="job-skills">SKILLS: Graphic Designer </p>
                        <p id='job-time'>Time: 1 day </p>
                        <p id='job-budget'>BUDGET: 1000 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 6 hours ago</p>
                        
                        <div id="job-desc">
                            <p> <b>--</b> Creating and implementing SEO strategies to improve website rankings.   </p>
                        </div>
                        <p id="job-skills">SKILLS: Search Engine Optimization (SEO) </p>
                        <p id='job-time'>Time: 3 hours </p>
                        <p id='job-budget'>BUDGET: 500 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 7 hours ago</p>
                        
                        <div id="job-desc">
                            <p> <b>--</b> To Manage social media accounts, including posting content and engaging with followers.</p>
                        </div>
                        <p id="job-skills">SKILLS: Social Media Management </p>
                        <p id='job-time'>Time: 2 weeks </p>
                        <p id='job-budget'>BUDGET: 6000 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 8 hours ago</p>
                        
                        <div id="job-desc">
                            <p> <b>--</b> Designing and executing email marketing campaigns.   </p>
                        </div>
                        <p id="job-skills">SKILLS: Email Campaign Management </p>
                        <p id='job-time'>Time: 3 days </p>
                        <p id='job-budget'>BUDGET: 2000</p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 9 hours ago</p>
                        
                        <div id="job-desc">
                            <p><b>--</b> To Analyze datasets to extract meaningful insights and trends.   </p>
                        </div>
                        <p id="job-skills">SKILLS: Data Analyst </p>
                        <p id='job-time'>Time: 3 hours </p>
                        <p id='job-budget'>BUDGET: 1000 </p>
                    </div>
                    <div className="job">
                        <p id="job-postedTime">posted 9 hours ago</p>
                        <h2 ></h2>
                        <div id="job-desc">
                            <p> <b>--</b> To enter data from forms and surveys into electronic systems.  </p>
                        </div>
                        <p id="job-skills">SKILLS: Data Entry </p>
                        <p id='job-time'>Time: 4 hours </p>
                        <p id='job-budget'>BUDGET: 1000 </p>
                    </div>
                </div>
            </div>
        </>
    )
}

