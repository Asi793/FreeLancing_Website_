// SignUpPage.js
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        skills: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
            fullName: '',
            email: '',
            password: '',
            skills: ''
        });
    };


    async function formSubmit(){
        try {
            const res = await axios.post('http://localhost:8000/signup/', formData);
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
        <div className="signup-page">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Skills (comma separated)</label>
                        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
