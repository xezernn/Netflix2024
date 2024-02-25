import React, { useState } from 'react'
import AdaptiveHeader from './AdaptiveHeader'
import AdaptiveFooter from './AdaptiveFooter'
import AdaptiveMain from './AdaptiveMain'
import NavBar from './NavBar'

function AdaptiveHome() {

    
    return (
        <div className='bg-[#141414]'>
            <div className='h-[50px]'>
                <AdaptiveHeader  />
            </div>
            <AdaptiveMain />
            <AdaptiveFooter />
            <NavBar/>

        </div>
    )
}

export default AdaptiveHome