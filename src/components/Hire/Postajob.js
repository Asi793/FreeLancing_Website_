import { useState } from 'react'
import './Hire.css'
import Hirenavbar from './Hirenavbar'
import axios from 'axios';

export default function Postajob() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        skills: '',
        duration:'',
        form:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        formSubmit();
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
            title: '',
            description: '',
            skills: '',
            duration:'',
            form:''
        });
    };

    async function formSubmit(){
        try {
            const res = await axios.post('http://localhost:8000/jobpost/', formData);
            console.log(res.data);
            alert(res.data.message);
        } catch (error) {
            if (error.response) {
                console.log("Error Response:", error.response.data);
            } else {
                console.log("Error:", error.message);
            }
        }
    }
    
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