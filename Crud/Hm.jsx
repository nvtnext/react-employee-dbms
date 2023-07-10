import React from 'react'
import ss from "./hm.module.css"
import { Link } from 'react-router-dom'

const Hm = () => {
  return (
    <div id={ss.nav}>
        <Link to="/">Create-User</Link>
        <Link to="/us">User</Link>
    </div>
  )
}

export default Hm