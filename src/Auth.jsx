import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import axios from 'axios'
import './styles/login.css'
import {Button} from '@material-ui/core'

export default function Auth() {
  const url = "https://react-gaming-backend.herokuapp.com"
  const frontEndUrl = "https://react-gaming.herokuapp.com"
  const [user, setUser] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`${url}/users/me`, {
      withCredentials: true
    })
      .then(result => {
        // setUser(result.data)
        console.log(`Result: ${result}`)
      })
      .catch(err =>
        console.log(`Error: ${err}`))
  }, [])

  const handleSignUp = (e) => {
    e.preventDefault()

    //axios post to url/register
    axios.post(`${url}/users/register`, {
      username: e.target[0].value,
      password: e.target[1].value
    }, {
      withCredentials: true
    })
      .then(res => {
        if (res.data.fail) {
          setError(res.data.fail)
        } else {
          setUser(res.data)
          window.location = `${frontEndUrl}`
        }
      })
      .catch(err => {
        console.log(err)
      })

  }
  const handleLogIn = (e) => {
    e.preventDefault()
    axios.post(`${url}/users/login`, {
      username: e.target[0].value,
      password: e.target[1].value
    }, {
      withCredentials: true
    })
      .then(res => {
        setUser(res.data)
        window.location = `${frontEndUrl}`
      })
      .catch(err => {
        setError(err.response.data)
      })
  }
  const handleLogOut = (e) => {
    e.preventDefault()
    axios.get(`${url}/users/logout`, {
      withCredentials: true
    })
      .then(() => {
        setUser(false)
        setError(false)
      })
  }

  const handleGoogleAuth = (e) => {
    window.location = `${url}/auth/google`
  }
  const handleDiscordAuth = (e) => {
    window.location = `${url}/auth/discord`
  }
  return (
    <div className="screen">
      <div className="container">
        {user ? (
          <>
            <h6>Logged in as {user.displayName || user.username}</h6>
            <Button variant="contained" color="primary" onClick={handleLogOut}>Log Out</Button>
          </>
        ) : (
            <>
              <div>
                <form onSubmit={handleSignUp}>
                  <label>Register with Username</label>
                  <input />
                  <label>Password</label>
                  <input type="password" /> <br></br>
                  <Button variant="contained" color="primary" type="submit">Sign up</Button>
                </form>

                <form onSubmit={handleLogIn}>
                  <br></br>
                  <label>Login with Username</label>
                  <input />
                  <label>Password</label>
                  <input type="password" /> <br></br>
                  <Button variant="contained" color="primary" type="submit">Sign In</Button>
                </form>
                <br></br><br></br><br></br>
                <Button variant="contained" color="secondary" onClick={handleGoogleAuth}>Google Auth</Button>
                <Button variant="contained" color="secondary" onClick={handleDiscordAuth}>Discord Auth</Button>
                {error ? (
                  <div>
                    <h4>{error.name}</h4>
                    <p>{error.message}</p>
                  </div>
                ) : (null)}
              </div>
            </>
          )}
      </div>
    </div>
  )
}


