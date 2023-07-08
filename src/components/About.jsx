import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>
        About Page
      </h1>
      <p><Link to="/">Back To Home</Link></p>
    </div>
  )
}

export default About