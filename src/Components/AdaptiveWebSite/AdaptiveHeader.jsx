import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavPro } from '../../Context/NavBar'

function AdaptiveHeader() {
  const {nav , setNav} = useContext(NavPro)

  return (
    <header className={`fixed w-full px-5 z-20 h-[50px] flex items-center justify-between ` + (nav ? "bg-[#000000a3]": "bg-black") }>

      <div className='flex gap-4 items-center'>
        <button onClick={()=>{setNav(!nav)}} className="">
          <img className='h-5' src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif" alt="" />
        </button>
        <Link className='h-6 w-[84px] block overflow-hidden'>
          <img className='w-full h-full' src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" alt="" />
        </Link>
      </div>

      <div>
        <input type="search" placeholder='Ara' className='border border-[#ccc] bg-[#141414] w-32 px-2 py-1 text-[white] '  />
      </div>
    </header>
  )
}

export default AdaptiveHeader