import React from 'react'
import BrowseHeader from './BrowseHeaderDark'
import BrowseFooter from './BrowseFooter'
import ImgComp from './BrowseMain/Sliders/ImgComp'
import BrowseTopBar2 from './Browse Top Bar/BrowseTopBar2'

function DileGore() {
    return (
        <>
            <BrowseHeader />
            <BrowseTopBar2 />
            <main className='bg-[#141414] pt-[100px] px-[4%]  '>
                <ImgComp />
            </main>
            <BrowseFooter />

        </>
    )
}

export default DileGore