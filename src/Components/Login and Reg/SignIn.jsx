import React from 'react'
import { Link } from 'react-router-dom'
function SignIn() {
    return (


       <div className='bg-black loginBg'>
         <div className="bgGradient pt-3 ">
             <header className='flex justify-between items-center h-[45px] sm:h-[75px] tabl:h-[90px] fonttt '>
                 <Link to={"/"} className='ml-[13px] sm:mx-[3%] '>
                     <svg viewBox="0 0 111 30" fill="#e50914" className="h-[20px] w-[75px] sm:h-[45px] sm:w-[167px] " aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
                 </Link>
        
             </header>
        
             <main className='px-[5%] mt-3 mx-auto opacity-90 rounded  max-w-[450px] bg-black md:min-h-[660px] md:mb-[90px]  md:px-[68px] md:pt-[60px] md:pb-[40px]  '>
        
                 <h1 className='text-[32px] text-white mb-[28px] font-[600]  '>Sign In</h1>
                 <div>
                     <form action="">
                         <input type="email" className=' bg-[#333] rounded-[4px] w-full px-5 py-4  text-[14px] text-[#8c8c8c]  ' placeholder="Email or phone number" />
                         <input type="password" className=' mt-4 bg-[#333] rounded-[4px] w-full px-5 py-4  text-[14px] text-[#8c8c8c]  ' placeholder="Password" />
                         <button className='w-full mt-[36px] rounded text-[16px]  p-3 bg-[#e50914] text-white  shadow '>Sing In</button>
        
                         <div className='flex justify-between mt-3       '>
        
        
                             <div className="inline-flex items-center gap-2 ">
                                 <label className="relative flex items-center cursor-pointer" htmlFor="check">
                                     <input type="checkbox"
                                         className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-[2px]  bg-[#737373] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                         id="check" />
                                     <span
                                         className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                             stroke="currentColor" >
                                             <path
                                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                             ></path>
                                         </svg>
                                     </span>
                                 </label>
                                 <label className="text-[#b3b3b3] text-[13px]" htmlFor="check">
                                     Remember Me
                                 </label>
                             </div>
                             <span className='text-right text-white'>Need help?</span>
                         </div>
        
                     </form>
        
                     <div className='mb-[100px]  '>
                         <p className='text-[#737373] mt-4 mb-[10px] '>
                             New to Netflix? <Link className='text-white text-[16px] ' to={"signup/registration"}>Sign up now.</Link>
                         </p>
                         <small className='text-[13px] font-[300] text-[#8c8c8c]  ' >This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='text-[#0071eb]  '> Learn more.</a> </small>
        
                     </div>
                 </div>
             </main>
             <footer className=' border-t border-[#737373] md:bg-black md:opacity-70 md:border-none  '>
                 <div className='w-[90%] m-auto py-[32px] md:w-[60%]'>
        
                     <div className='mb-[30px]'>
                         <a href="#" className='text-[#737373] text-[16px]'>Questions? Contact us. </a>
                     </div>
        
                     <ul className='text-[13px] max-w-[1000px] text-[#737373] box-border my-[13px] '>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_faq_item">
                             <a >
                                 <span >FAQ</span>
                             </a>
                         </li>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_help_item">
                             <a >
                                 <span >Help Center</span>
                             </a>
                         </li>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_netflix_shop_item">
                             <a >
                                 <span >Netflix Shop</span>
                             </a>
                         </li>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_terms_item">
                             <a>
                                 <span >Terms of Use</span>
                             </a>
                         </li>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_privacy_separate_link_item">
                             <a>
                                 <span >Privacy</span>
                             </a>
                         </li>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_cookies_separate_link_item">
                             <a >
                                 <span >Cookie Preferences</span>
                             </a>
                         </li>
                         <li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_corporate_information_item">
                             <a>
                                 <span >Corporate Information</span>
                             </a>
                         </li>
                     </ul>
        
                     <div className='W-full mt-[-10px]'>
                         <div className="relative  text-[#737373]  flex items-center w-[160px] h-[42px]  ">
                             <div className="absolute left-[20%] top-[15%] w-6 h-6 content-[\e896]  ">
        
                             </div>
                             <select className='border-[#808080b3] border z-10 absolute p-[5px] inset-0 bg-transparent appearance-none text-[#737373] selection:hidden' name="" id="">
                                 <option className='text-center text-black bg-transparent  ' value="english">English</option>
                                 <option className='text-center text-black bg-transparent  ' value="russian">Русский</option>
                             </select>
        
                             <div className="absolute right-[10%] top-[25%] ">
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                     className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true">
                                     <path
                                         d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                                         fill="currentColor"></path>
                                 </svg>
                             </div>
                         </div>
                     </div>
        
                 </div>
        
             </footer>
        
        
        
         </div>
       </div>
    )
}

export default SignIn