import React, { useState } from "react"
import ReactDOM from 'react-dom'
import './styles/login.css'
import GoogleLogin from "react-google-login"

export default function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")

    const responseGoogle = response => {
        setName(response.profileObj.name)
        setEmail(response.profileObj.email)
        setUrl(response.profileObj.imageUrl)
    }

    function UserGreeting() {
        return (<>
            <div className="login-page">
                <div className="form">
                    <h1>Welcome back {name}!</h1>
                    <h2>Welcome: {name}</h2>
                    <h2>Email: {email}</h2>
                    <img src={url} alt={name} />
                </div></div>
        </>
        )
    }

    function GuestGreeting() {
        return (
            <>
                <div className="login-page">
                    <div className="form">
                        <form className="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                            <p className="message">Already registered? <a href="#">Sign In</a></p>
                        </form>
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p className="message">Not registered? <a href="#">Create an account</a></p>
                            <h2>Or login with Google:</h2>
                            <GoogleLogin
                                clientId="157895230249-agrvo2b25jecn7isgs81hsv77khm7lfs.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                        </form>
                    </div>
                </div>

            </>
        )
    }

    function LoginCheck() {
        if (email != "") {
            return <UserGreeting />
        }
        return <GuestGreeting />
    }

    return (

        <LoginCheck />
    )
}


