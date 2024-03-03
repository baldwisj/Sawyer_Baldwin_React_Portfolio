import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <Link to={''}>About Me</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"portfolio"}>Portfolio</Link>
        <Link to={"Resume"}>Resume</Link>
    </div>
  )
}

export default Header