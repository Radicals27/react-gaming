import React, { useState } from "react"
import ReactDOM from 'react-dom'
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
    return ( <>
        <h1>Welcome back {name}!</h1>
        <h2>Welcome: {name}</h2>
        <h2>Email: {email}</h2>
        <img src={url} alt={name} />
      </>
    )
  }

  function GuestGreeting() {
    return (
      <>
        <h1>Welcome!</h1>
        <h2>Please Log in:</h2>
        <GoogleLogin
          clientId="157895230249-agrvo2b25jecn7isgs81hsv77khm7lfs.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
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
    <div className="App">

    <LoginCheck/>
      
    </div>
  )
}

