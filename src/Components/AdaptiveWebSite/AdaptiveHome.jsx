import React, { useState } from 'react'
import AdaptiveHeader from './AdaptiveHeader'
import AdaptiveFooter from './AdaptiveFooter'
import AdaptiveMain from './AdaptiveMain'
import NavBar from './NavBar'

function AdaptiveHome() {

    const [nav, setNav] = useState(true)
    return (
        <div className='bg-[#141414]'>
            <div className='h-[50px]'>
                <AdaptiveHeader nav={nav} setNav={setNav} />
            </div>
            <AdaptiveMain />
            <AdaptiveFooter />
            <NavBar nav={nav} />

        </div>
    )
}

export default AdaptiveHome