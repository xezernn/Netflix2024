import React from 'react'
import foto from "../../assets/img/adaptiveplayer.jpg"
import { Link } from 'react-router-dom'
function AdaptiveApp() {
  return (
    <Link to={"/browse"} className='block w-full h-screen'>
        <img className='w-full h-full' src={foto} alt="" />        
    </Link>
  )
}

export default AdaptiveApp