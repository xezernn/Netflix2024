import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../firebase';
import { logout as logoudHandle } from '../../Store/auth';
import { useDispatch, useSelector } from 'react-redux';


function Home() {

    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    async function handleLogout() {
        await logout()
        dispatch(logoudHandle())
        navigate("/", { replace: true })
    }


    return (
        <div>Sen artiq daxil oldun balas


            <div>
                <button className=' bg-indigo-700 p-2 text-white ' onClick={handleLogout} >cixis ele ay qa</button>
            </div>
        </div>
    )
}

export default Home