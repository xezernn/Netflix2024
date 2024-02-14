import React from 'react'
import RegHeader from './RegHeader'
import RegFooter from './RegFooter'
import { Link } from 'react-router-dom'

function PaymentPicker() {
    return (
        <>
            <RegHeader />
            <main className='w-full  px-8  pb-[60px] flex items-center justify-center '>
                <div className='w-full max-w-[500px] '>
                    <div className='w-[50px] h-[50px] !bg-50 bg-left-top paymentStepLogo  med:m-auto  '   ></div>
                    <div className=' mt-[40px] sm:text-center '>
                        <p className='text-[13px]  '>STEP <strong>3</strong> OF <strong>3</strong> </p>
                        <h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Choose how to pay</h1>
                        <p className='text-[18px] sm:px-8 '>Your payment is encrypted and you can change how you pay anytime. <br /> </p>

                        <p className='font-[600] text-[18px] mt-[10px]'>Secure for peace of mind.</p>
                        <p className='font-[600] text-[18px] '>Cancel easily online.</p>

                        <div className='mt-5'>
                            <div className='flex justify-end items-center gap-1 h-[14px] text-[13px] ' > <span >End-to-end encrypted</span>
                                <svg className='w-4 h-4' viewBox="0 0 12 16" ><g fill="#FFB53F"><g fill="#FFB53F"><path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path></g></g></svg>
                            </div>
                            <Link to={"/signup/creditoption"} className='cursor-pointer my-[5px] border-[2px] border-[#ccc] rounded-[5px] min-h-[60px] flex items-center justify-between'>
                                <div className=' p-[15px] sm:flex items-center gap-3 '>
                                    <p>
                                        Credit or Debit Card
                                    </p>
                                    <div className='flex gap-[6px] mt-1  '>
                                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="" />
                                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="" />
                                        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="" />
                                    </div>
                                </div>

                                <div className='pr-[10px]'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>


            <RegFooter />

        </>
    )
}

export default PaymentPicker