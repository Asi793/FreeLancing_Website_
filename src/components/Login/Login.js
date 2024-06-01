import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        formSubmit();
        if(username === 'asritha' && password === '123') {
            navigate('/services'); 
        } else {
            setErrorMessage("Invalid Credentials !!!");
        }
    }

    async function formSubmit(){
        const res=await axios.post("http://localhost:8000/login/",{'username':username,'password':password});
        console.log(res.data);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <input type="text" name="username" id="username" placeholder="Enter Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <input type="submit" value="Login" />
                {errorMessage && <p>{errorMessage}</p>}
                <Link to="/forgot-password">Forgot Password</Link>
            </form>
        </div>
    );
}




// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Login({ setIsLoggedIn }) {
//     const navigate = useNavigate(); 
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault(); 
//         try {
//             await formSubmit();
//             if(username === 'asritha' && password === '123') {
//                 navigate('/services'); 
//             } else {
//                 setErrorMessage("Invalid Credentials !!!");
//             }
//         } catch (error) {
//             console.error('Error during form submission:', error);
//             setErrorMessage("An error occurred during login");
//         }
//     };

//     async function formSubmit() {
//         try {
//             const res = await axios.post("http://localhost:8000/login/", {
//                 username: username,
//                 password: password
//             });
//             console.log('Response data:', res.data);
//         } catch (error) {
//             if (error.response) {
//                 console.error('Error response data:', error.response.data);
//                 console.error('Error response status:', error.response.status);
//                 console.error('Error response headers:', error.response.headers);
//             } else if (error.request) {
//                 console.error('Error request:', error.request);
//             } else {
//                 console.error('Error message:', error.message);
//             }
//             console.error('Error config:', error.config);
//             throw error; // Rethrow error to handle in handleSubmit
//         }
//     }

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <h1>Login Form</h1>
//                 <input type="text" name="username" id="username" placeholder="Enter Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <input type="password" name="password" id="password" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                
//                 <input type="submit" value="Login" />
//                 {errorMessage && <p>{errorMessage}</p>}
//                 <Link to="/forgot-password">Forgot Password</Link>
//             </form>
//         </div>
//     );
// }

