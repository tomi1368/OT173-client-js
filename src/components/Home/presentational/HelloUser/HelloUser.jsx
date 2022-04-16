import React from "react"
import "./HelloUser.scss"
const HelloUser = (username="Carlos") => {
  return (
    <h1 className="hello">Hello {username}! Welcome Back! <span className="hello-hand">&#128400;</span></h1>
  )
}

export default HelloUser