import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase';
import { useSelector } from 'react-redux';

function Home() {

    const {user} = useSelector(state=> state.auth)

    async function handleSubmit(e) {
        e.preventDefault()
        const user = await logout()
        // console.log(user);
    }

    if(user){
        return (
            <div>
                Hos gelsin ay elvin bey
            </div>
        )
    }

    return (
        <div>
            <h1>Ha bura homedir</h1>
            <p>
                <Link to="/register" >Register ele</Link>
            </p>
            <Link to="/login" >Login ele</Link>


            <div>
                <button onClick={handleSubmit} >cixis ele ay qa</button>
            </div>
        </div>
    )
}

export default Home