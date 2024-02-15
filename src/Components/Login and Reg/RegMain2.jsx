import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import RegHeader from './RegHeader'
import RegFooter from './RegFooter'
import { User } from '../../Context/UserContext'
function RegMain2() {

    const { email, setEmail, password, setPassword } = useContext(User)
    
    return (
        <>
            <RegHeader />
            <main className='w-full h-[94vh] px-8 pt-[20px] pb-[60px] flex  justify-center '>
                <div className=' '>
                    <div className='max-w-[440px] mt-[20px]'>
                        <p className='text-[13px]  '>STEP <strong>1</strong> OF <strong>3</strong> </p>
                        <h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Create a password to start your membership</h1>
                        <p className='text-[18px] '>Just a few more steps and you're done! <br />
                            We hate paperwork, too.</p>
                        <div className='flex flex-col gap-[10px] my-4 '>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='p-4 text-[1rem] min-w-4 min-h-4 border border-[#808080] rounded ' type="email" placeholder="Email" id="ds" />
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='p-4 text-[1rem] min-w-4 min-h-4 border border-[#808080] rounded ' type="password" placeholder="Password" id="sd" />
                            <div className='flex items-center gap-2'>
                                <input className='cursor-pointer h-5 w-5 rounded-[10px] checked:bg-[#2bb871] checked:text-white hover:border-[#2bb871] ' type="checkbox" id="horns" name="horns" />
                                <label for="horns">Please do not email me Netflix special offers.</label>
                            </div>
                        </div>

                    </div>
                    <Link to="/signup/chooseplan" className='block text-center w-full mt-[24px] rounded text-[24px] font-[400] min-h-16 py-[14px] px-[2em] bg-[#e50914] text-white  shadow '>Next</Link>
                </div>
            </main>
            <RegFooter />
        </>
    )
}

export default RegMain2