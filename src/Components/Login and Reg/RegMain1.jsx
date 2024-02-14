import React from 'react'
import Komp from '../../assets/img/regKomp.png'
import RegHeader from './RegHeader'
import RegFooter from './RegFooter'
import { Link } from 'react-router-dom'
function RegMain() {
	return (
		<>
			<RegHeader />
			<main className='w-full h-[94vh] px-8 pt-[20px] pb-[60px] flex items-center justify-center '>
				<div className=' med:text-center '>
					<div className='w-[260px] h-[90px] regStepLogo  med:m-auto  '   ></div>
					<div className='max-w-[340px] mt-[20px]'>
						<p className='text-[13px]  '>STEP <strong>1</strong> OF <strong>3</strong> </p>
						<h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Finish setting up your account</h1>
						<p className='max-w-[300px] text-[18px] tabl:max-w-[295px] med:m-auto '>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
					</div>
					<Link to={"/signup/regform"} className='inline-block max-w-[340px] w-full mt-[24px] rounded text-[24px] font-[400] min-h-16 py-[14px] px-[2em] bg-[#e50914] text-white  shadow '>Next</Link>
				</div>
			</main>
			<RegFooter />
		</>
	)
}

export default RegMain