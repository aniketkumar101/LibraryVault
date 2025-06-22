import React from 'react'
import error from '../assets/error.png'
import {Link} from 'react-router-dom'
export default function Failed() {
  return (
    <div className="animated-404">
        <img src={error} alt="404 Error Illustration"/>
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for might be under construction or doesn't exist.</p>
        <Link to="/">Go back to the home page</Link>
    </div>
  )
}
