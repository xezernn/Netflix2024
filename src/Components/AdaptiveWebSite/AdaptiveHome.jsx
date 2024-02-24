import React from 'react'
import AdaptiveHeader from './AdaptiveHeader'
import AdaptiveFooter from './AdaptiveFooter'
import AdaptiveMain from './AdaptiveMain'

function AdaptiveHome() {
    return (
        <div className='bg-[#141414]'>
            <div className='h-[50px]'>
                <AdaptiveHeader />
            </div>
            <AdaptiveMain />
            <AdaptiveFooter />

        </div>
    )
}

export default AdaptiveHome