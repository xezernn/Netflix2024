import React from 'react'

function RegMain3() {
    return (
        <main className='w-full h-[94vh] px-8 pt-[20px] pb-[60px] flex items-center justify-center '>
            <div className=''>
                <div className='w-[50px] h-[50px] !bg-50 regChecLogo  med:m-auto  '   ></div>
                <div className='max-w-[400px] mt-[20px]'>
                    <p className='text-[13px]  '>STEP <strong>2</strong> OF <strong>3</strong> </p>
                    <h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Choose your plan.</h1>
                    <ul className='text-[18px] my-[15px] max-w-[300px] '>
                        <li className='flex gap-[10px]  '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#e50914]' data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>

                            <span>No commitments, cancel anytime.</span></li>
                        <li className='mt-5 flex gap-[10px]  ' >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#e50914]' data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span>Everything on Netflix for one low price. </span></li>
                        <li className='mt-5 flex gap-[10px]' >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-[#e50914]' data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                            <span>Unlimited viewing on all your devices.</span>
                        </li>
                    </ul>

                </div>
                <button className=' min-w-[400px] w-full mt-[24px] rounded text-[24px] font-[400] min-h-16 py-[14px] px-[2em] bg-[#e50914] text-white  shadow '>Next</button>
            </div>
        </main>
    )
}

export default RegMain3