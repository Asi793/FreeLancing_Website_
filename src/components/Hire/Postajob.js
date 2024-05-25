

import './Hire.css'
import Hirenavbar from './Hirenavbar'

export default function Postajob() {
    return (
        <>
            <Hirenavbar />
            <div className="postajob">
                <h1>Post a Job</h1>
                <form>
                    <label htmlFor="job-title">Title</label>
                    <input type="text" name="job-title" id="job-title"/> <br />

                    <label htmlFor="job-desc">Description</label>
                    <textarea name="job-desc" id="job-desc" rows={10}></textarea> <br />

                    <label htmlFor="job-skills">Skills (comma seperated)</label>
                    <input type="text" name="job-skills" id="job-skills" /> <br />

                    <label htmlFor="job-time">Duration</label>
                    <input type="text" name="job-time" id="job-time" /> <br />

                    <label htmlFor="job-budget">Form</label>
                    <input type="text" name="job-budget" id="job-budget" /> <br />

                    <input type="submit" value="Post" />
                </form>
            </div>
        </>
    )
}