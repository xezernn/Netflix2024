import React, { useContext } from 'react'
import RegHeader from './RegHeader'
import RegFooter from './RegFooter'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registr } from '../../firebase'
import { User } from '../../Context/UserContext'
import { login as loginHandle } from '../../Store/auth'


function CreditOption() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { email, setEmail, password, setPassword } = useContext(User)

    async function handleSubmit(e) {
        e.preventDefault()
        const user = await registr(email, password)
        dispatch(loginHandle(user))
        navigate("/", { replace: true })

    }



    return (
        <>
            <RegHeader />
            <main className='w-full  px-8  pb-[60px] flex items-center justify-center '>
                <div className='w-full max-w-[440px] '>
                    <div className=' mt-[40px]  '>
                        <p className='text-[13px]  '>STEP <strong>3</strong> OF <strong>3</strong> </p>
                        <h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Set up your credit or debit card</h1>

                        <div className=''>
                            <div className='flex gap-[6px] mt-1  '>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="" />
                            </div>

                            <form className="max-w-[500px] mt-[10px]">
                                <div className='border-[1px] border-[#8c8c8c] h-[60px] w-full rounded-[2px] mb-[10px] relative '>
                                    <input className='w-full p-[10px] h-full outline-none ' type="text" placeholder='Card number' />
                                    <svg className='absolute top-[32%] right-[5%] ' width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="CreditCard" aria-hidden="true" color="rgb(128,128,128)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V8H22V6C22 5.44771 21.5523 5 21 5H3ZM2 18V10H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18ZM16 16H20V14H16V16Z" fill="currentColor"></path></svg>
                                </div>
                                <div className='flex gap-2 h-[60px] mb-[10px] '>
                                    <input className='border-[1px] border-[#8c8c8c] remove-arrow w-2/4 p-[10px] h-full outline-[#2783e0]' type="number" maxlength="4" placeholder='Expiration date' />
                                    <input className='border-[1px] border-[#8c8c8c] remove-arrow w-2/4 p-[10px] h-full outline-[#2783e0]' type="number" placeholder='CVV' />
                                </div>
                                <div className='border-[1px] border-[#8c8c8c] h-[60px] w-full rounded-[2px]  '>
                                    <input className='w-full p-[10px] h-full outline-none ' type="text" placeholder='Card number' />
                                </div>
                            </form>
                            <div className='mt-[10px] bg-[#f4f4f4] min-h-[72px] w-full rounded-[5px] flex justify-between items-center px-[14px] py-[7px] '>
                                <div>
                                    <h2 className='text-[15px] text-[#333] font-[600] '>
                                        EUR 11.99/month
                                    </h2>
                                    <p className=' text-[14px] text-[#737373] '  >  Premium</p>
                                </div>

                                <Link className='text-[14px] text-[#0071eb] font-bold  ' to={"/signup/planform"}>
                                    Change
                                </Link>
                            </div>

                            <div className='mt-[20px]'>
                                <p className='text-[#8c8c8c]  text-[13px] leading-[1.3] '>
                                    By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently EUR 11.99/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
                                </p>

                                <div className=' flex items-center gap-3 mt-[10px] mb-5 !outline-none border-none  '>
                                    <input type="checkbox" className='w-6 h-6' id='che' />
                                    <label className='text-[#8c8c8c] text-[16px] ' for="che"> I agree. </label>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} >
                                <button type='submit' className=' block text-center min-w-[340px] md:min-w-[400px] w-full mt-6 rounded text-[24px] font-[400] min-h-16 py-[14px] px-[2em] bg-[#e50914] text-white  shadow '>Start Membership</button>
                            </form>
                            <p className='text-[#8c8c8c]  text-[13px] leading-[1.3] mt-5 '>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <RegFooter />
        </>
    )
}

export default CreditOption