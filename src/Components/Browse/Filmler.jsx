import React, { useState } from 'react'
import BrowseHeaderDark from './BrowseHeaderDark'
import Main from './BrowseMain/Main'
import BrowseFooter from './BrowseFooter'
import BrowseTopBar from './Browse Top Bar/BrowseTopBar'

function Filmler() {
    const [elem, setElem] = useState("Filmler")
    // console.log(elem);
    return (
        <>
            <BrowseHeaderDark />
            <BrowseTopBar elem={elem} />
            <Main />
            <BrowseFooter />
        </>
    )
}

export default Filmler