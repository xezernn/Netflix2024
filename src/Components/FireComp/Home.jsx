import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase';

function Home() {

    async function handleSubmit(e) {
        e.preventDefault()
        const user = await logout()
        // console.log(user);
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