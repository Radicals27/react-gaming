import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import './styles/login.css'
import axios from 'axios'
require('dotenv').config()

export default function Auth() {
  const url = process.env.BACK_END_URL
  const [user, setUser] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`${url}/users/me`, {
      withCredentials: true
    })
      .then(result => {
        setUser(result.data)
      })
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
    <div>
      {user ? (
        <>
          <h2>Logged in as {user.displayName || user.username}</h2>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      ) : (
          <>
            <h2>Register</h2>
            <form onSubmit={handleSignUp}>
              <label>Username</label>
              <input />
              <label>Password</label>
              <input />
              <button>Sign up</button>
            </form>
            <h2>Login</h2>
            <form onSubmit={handleLogIn}>
              <label>Username</label>
              <input />
              <label>Password</label>
              <input />
              <button>Sign In</button>
            </form>
            <button onClick={handleGoogleAuth}>Google Auth</button>
            <button onClick={handleDiscordAuth}>Discord Auth</button>
            {error ? (
              <div>
                <h4>{error.name}</h4>
                <p>{error.message}</p>
              </div>
            ) : (null)}
          </>
        )}
    </div>
  )
}


