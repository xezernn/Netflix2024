import React from 'react'
import { Link } from 'react-router-dom'

function AdaptiveFooter() {
	return (
		<footer className='py-[50px] px-[20px]'>
			<ul className='text-[#999] mx-auto text-center '>
				<li className='hover:underline inline-block w-full xsm:w-2/4 '>
					<Link>Kullanım Koşulları</Link>
				</li>
				<li className='hover:underline inline-block w-full xsm:w-2/4 '>
					<Link>Gizlilik Bildirimi</Link>
				</li>
				<li className='hover:underline inline-block w-full xsm:w-2/4 '>
					<Link>Çerez Tercihleri</Link>
				</li>
				<li className='hover:underline inline-block w-full xsm:w-2/4 '>
					<Link>Yardım Merkezi</Link>
				</li>
			</ul>
		</footer>
	)
}

export default AdaptiveFooter