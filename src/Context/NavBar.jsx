import React, { createContext, useState } from 'react'

export const NavPro = createContext(null)

function NavBar({ children }) {

    const [nav, setNav] = useState(true)
    const obj = {nav, setNav}
    return (
        <NavPro.Provider value={obj} >
            {children}
        </NavPro.Provider>
    )
}

export default NavBar