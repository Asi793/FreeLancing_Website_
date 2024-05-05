import './Login.css';

export default function Login() {
    return(
        <>
            <div className="container">
                <form action="">
                    <h1>Login Form</h1>
                    <input type="text" name="username" id="username" placeholder="Enter Username"/>
                    <input type="password" name="password" id="password" placeholder="Enter Password"/>
                    <input type="submit"  value="Login"/>
                </form>
            </div>
        </>
    )
}