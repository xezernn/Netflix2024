import React, { useContext, useState } from 'react'
import { registr } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login as loginHandle } from '../../Store/auth'
import { useNavigate } from 'react-router-dom'
import { User } from '../../Context/UserContext'


function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {email, setEmail, password, setPassword} =useContext(User)
    
    async function handleSubmit(e) {
        e.preventDefault()
        const user = await registr(email, password)
        dispatch(loginHandle(user))
        navigate("/login", { replace: true })
    }



    return (
        <div class="w-full max-w-xs">
            <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Qeydiyyatdan kec
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    )
}

export default Register