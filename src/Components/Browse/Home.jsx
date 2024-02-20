import React from 'react'
import { useSelector } from 'react-redux';
import SignIn from "../Login and Reg/SignIn"
import BrowseHeader from './BrowseHeader';
import Main from './BrowseMain/Main';


function Home() {
    const { user } = useSelector(state => state.auth)

    if (user) {
        return (
            <div className='min-h-[200vh] bg-[#141414] '>
                <BrowseHeader />
                <Main />
            </div>
        )
    }

    return (
        <SignIn />
    )
}

export default Home