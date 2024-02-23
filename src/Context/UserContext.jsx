import React, { createContext, useState } from 'react'

export const User = createContext(null)

function UserContext({ children }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const obj = {email, setEmail, setPassword, password}
    return (
        <User.Provider value={obj} >
            {children}
        </User.Provider>
    )
}

export default UserContext