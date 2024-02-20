import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase';
import { logout as logoudHandle } from '../../Store/auth';
import { useDispatch, useSelector } from 'react-redux';

import SignIn from "../Login and Reg/SignIn"
import BrowseHeader from './BrowseHeader';
import Main from './BrowseMain/Main';


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
            // bgQeribe
            <div className='h-[200vh]  '>
                <BrowseHeader />
                <Main />

                <div className='h-[20vh]'></div>

            </div>
        )
    }

    return (
        <SignIn />
    )
}

export default Home