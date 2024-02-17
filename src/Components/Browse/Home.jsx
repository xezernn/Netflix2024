import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../firebase';
import { logout as logoudHandle } from '../../Store/auth';
import { useDispatch, useSelector } from 'react-redux';
import SelectProfile from './SelectProfile';

import SignIn from "../Login and Reg/SignIn"


function Home() {

    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    async function handleLogout() {
        await logout()
        dispatch(logoudHandle())
        navigate("/", { replace: true })
    }


    if (user) {
        return (
            <div>

                dshfdhjfdj
            </div>
        )
    }

    return (
        <SignIn />
    )
}

export default Home