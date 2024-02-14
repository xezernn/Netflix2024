import React from 'react'
import RegHeader from './RegHeader'
import RegFooter from './RegFooter'
import { Link } from 'react-router-dom'

function CreditOption() {
    return (
        <>
            <RegHeader />
            <main className='w-full  px-8  pb-[60px] flex items-center justify-center '>
                <div className='w-full max-w-[500px] '>
                    <div className=' mt-[40px] sm:text-center '>
                        <p className='text-[13px]  '>STEP <strong>3</strong> OF <strong>3</strong> </p>
                        <h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Set up your credit or debit card</h1>

                        <div className=''>
                            <div className='flex gap-[6px] mt-1  '>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="" />
                            </div>

                            <form className="max-w-[500px]">
                                <div className='border-[2px] border-[#8c8c8c] h-[60px] relative rounded-[2px] mb-[10px] '>
                                    <input className='w-full p-[10px] h-full outline-none ' type="number" placeholder='Card number' />
                                    <svg className='absolute top-[32%] right-[2%] z-10 bg-white' width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CreditCard" aria-hidden="true" color="rgb(128,128,128)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V8H22V6C22 5.44771 21.5523 5 21 5H3ZM2 18V10H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18ZM16 16H20V14H16V16Z" fill="currentColor"></path></svg>
                                </div>
                                <div className='flex gap-2 h-[60px]'>
                                    <input className='border-[2px] border-[#8c8c8c] remove-arrow w-2/4 p-[10px] h-full outline-[#2783e0]' type="number" maxlength="4" placeholder='Expiration date' />
                                    <input className='border-[2px] border-[#8c8c8c] remove-arrow w-2/4 p-[10px] h-full outline-[#2783e0]' type="number" placeholder='CVV' />
                                </div>
                                <input type="text"/>
                                <input type="text"/>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <RegFooter />
        </>
    )
}

export default CreditOption