import React from 'react'

function RegFooter() {
	return (
		<footer className='bg-[#F3F3F3] border-t-[#e6e6e6] '>
			<div className='w-[90%] m-auto py-[32px]'>

				<div className='mb-[30px]'>
					<a href="#" className='text-[#737373] text-[16px]'>Questions? Contact us. </a>
				</div>

				<ul className='text-[13px] max-w-[1000px] text-[#737373] box-border my-[13px] '>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 ' placeholder="footer_responsive_link_faq_item">
						<a >
							<span >FAQ</span>
						</a>
					</li>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 '  placeholder="footer_responsive_link_help_item">
						<a >
							<span >Help Center</span>
						</a>
					</li>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 '  placeholder="footer_responsive_link_netflix_shop_item">
						<a >
							<span >Netflix Shop</span>
						</a>
					</li>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 '  placeholder="footer_responsive_link_terms_item">
						<a>
							<span >Terms of Use</span>
						</a>
					</li>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 '  placeholder="footer_responsive_link_privacy_separate_link_item">
						<a>
							<span >Privacy</span>
						</a>
					</li>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 '  placeholder="footer_responsive_link_cookies_separate_link_item">
						<a >
							<span >Cookie Preferences</span>
						</a>
					</li>
					<li className='box-border inline-block mb-4 min-w-[100px]  w-2/4  med:w-4/12  md:w-1/4 '  placeholder="footer_responsive_link_corporate_information_item">
						<a>
							<span >Corporate Information</span>
						</a>
					</li>
				</ul>

				<div className='W-full mt-[-10px]'>
					<div className="relative text-black bg-white flex items-center w-[160px] h-[42px]  ">
						<div className="absolute left-[20%] top-[15%] w-6 h-6 content-[\e896]  ">
							
						</div>
						<select className='border-[#808080b3] border z-10 absolute p-[5px] inset-0 bg-transparent appearance-none text-[#000] selection:hidden' name="" id="">
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
	)
}

export default RegFooter