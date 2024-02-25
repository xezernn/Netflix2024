import React from 'react'
import AdaptiveHeader from './AdaptiveHeader'
import AdaptiveFooter from './AdaptiveFooter'
import AdaptiveList from './AdaptiveList'
import NavBar from './NavBar'

function AdaptiveBrowse() {
    return (
        <div className='min-h-screen bg-[#141414]'>
            <AdaptiveHeader />
            <AdaptiveList />
            <AdaptiveFooter />
            <NavBar />

        </div>
    )
}

export default AdaptiveBrowse