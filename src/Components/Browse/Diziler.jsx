import React, { useState } from 'react'
import BrowseHeaderDark from './BrowseHeaderDark'
import Main from './BrowseMain/Main'
import BrowseFooter from './BrowseFooter'
import BrowseTopBar from './Browse Top Bar/BrowseTopBar'

function Diziler() {


  return (
    <>
      <BrowseHeaderDark  /> 
      <BrowseTopBar />
      <Main />
      <BrowseFooter />

    </>
  )
}

export default Diziler