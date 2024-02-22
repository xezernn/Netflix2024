import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BrowseFooter() {

	const [btn, setBtn] = useState("Service Code")
	return (
		<footer className='min-h-[40vh] bg-[#141414] text-[grey] font-[500] pt-[70px]'>

			<div className='max-w-[980px] px-[4%] mx-auto text-[13px]'>
				<div className='flex gap-4 text-white text-start mb-2'>
					<Link>
						<svg className='w-9 h-[25px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Facebook" aria-labelledby=":r1p:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.987 13.1621V21.9841H10.042V13.1621H6.84198V9.51207H10.047V6.73207C10.047 3.56707 11.932 1.82007 14.815 1.82007C15.7618 1.83321 16.7063 1.91577 17.641 2.06707V5.17307H16.045C15.4954 5.10007 14.9424 5.28088 14.5421 5.66447C14.1417 6.04807 13.9375 6.59284 13.987 7.14507V9.51207H17.487L16.928 13.1621H13.987Z" fill="currentColor"></path></svg>
					</Link>

					<Link>
						<svg className='w-9 h-[25px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Instagram" aria-labelledby=":r1q:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.93 16.123C21.9584 17.6765 21.3789 19.1796 20.315 20.312C19.1851 21.3804 17.6797 21.9607 16.125 21.927C14.474 22.021 9.52499 22.021 7.87499 21.927C6.32126 21.9551 4.81792 21.3757 3.68499 20.312C2.61754 19.1819 2.03744 17.6772 2.06999 16.123C1.97699 14.472 1.97699 9.523 2.06999 7.873C2.03955 6.31886 2.61933 4.81466 3.68499 3.683C4.81767 2.61952 6.32162 2.04163 7.87499 2.073C9.52599 1.979 14.475 1.979 16.125 2.073C17.6789 2.04394 19.1826 2.62353 20.315 3.688C21.3825 4.81813 21.9625 6.32278 21.93 7.877C22.023 9.528 22.023 14.472 21.93 16.123ZM20.2 12C20.2 10.545 20.32 7.422 19.8 6.106C19.4572 5.23679 18.7692 4.54875 17.9 4.206C16.588 3.689 13.461 3.806 12.006 3.806C10.551 3.806 7.42799 3.685 6.11199 4.206C5.24298 4.54905 4.55505 5.23699 4.21199 6.106C3.69499 7.418 3.81199 10.545 3.81199 12C3.81199 13.455 3.69099 16.578 4.21199 17.894C4.55535 18.7628 5.24318 19.4506 6.11199 19.794C7.42399 20.311 10.552 20.194 12.006 20.194C13.46 20.194 16.584 20.315 17.9 19.794C18.769 19.451 19.4569 18.763 19.8 17.894C20.319 16.582 20.2 13.455 20.2 12ZM17.13 12C17.13 14.8312 14.8352 17.1264 12.004 17.127C9.17282 17.1276 6.8771 14.8332 6.87599 12.002C6.87489 9.17083 9.16882 6.87466 12 6.87299C13.3608 6.87034 14.6666 7.40959 15.629 8.37161C16.5914 9.33363 17.1311 10.6392 17.129 12H17.13ZM15.336 12C15.336 10.1596 13.8444 8.66756 12.004 8.667C10.1636 8.66645 8.6711 10.1576 8.66999 11.998C8.66889 13.8384 10.1596 15.3313 12 15.333C13.8406 15.3319 15.3328 13.8406 15.335 12H15.336ZM17.336 7.85901C16.6733 7.85901 16.136 7.32174 16.136 6.659C16.136 5.99626 16.6733 5.459 17.336 5.459C17.9987 5.459 18.536 5.99626 18.536 6.659C18.5379 6.97731 18.4124 7.28317 18.1876 7.50853C17.9628 7.73389 17.6573 7.86008 17.339 7.85901H17.336Z" fill="currentColor"></path></svg>
					</Link>

					<Link>
						<svg className='w-9 h-[25px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Youtube" aria-labelledby=":r1r:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.54 6.67C22.288 5.71873 21.549 4.97331 20.6 4.713C18.88 4.25 12 4.25 12 4.25C12 4.25 5.11997 4.25 3.39997 4.713C2.45094 4.97331 1.71199 5.71873 1.45997 6.67C1.14265 8.42869 0.988663 10.213 0.99997 12C0.988663 13.787 1.14265 15.5713 1.45997 17.33C1.71288 18.2825 2.45401 19.0282 3.40497 19.287C5.11997 19.75 12.005 19.75 12.005 19.75C12.005 19.75 18.885 19.75 20.6 19.287C21.549 19.0267 22.288 18.2813 22.54 17.33C22.8573 15.5713 23.0113 13.787 23 12C23.0113 10.213 22.8573 8.42869 22.54 6.67ZM9.74997 15.27V8.729L15.5 12L9.74997 15.27Z" fill="currentColor"></path></svg>
					</Link>
				</div>

				<div>
					<ul className='w-full flex items-start flex-row flex-wrap pb-[14px] p-0'>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Audio Description</li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Help Center </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Gift Cards </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Media Center </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Investor Relations </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Jobs </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Terms of Use</li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Privacy</li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Legal Notices </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Cookie Preferences </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Corporate Information </li>
						<li className='box-border grow-0 shrink-0 basis-[50%] tabl:basis-[25%] mb-4 pr-[22px]' >Contact Us</li>
					</ul>
				</div>

				<div>
					<button onClick={() => {setBtn("691-611")}} className='mb-5 p-2 text-[13px] border border-[grey]' >{btn} </button>
				</div>

				<p className='text-[11px] pb-[15px]'>
					© 1997-2024 Netflix, Inc.
				</p>
			</div>

		</footer>
	)
}

export default BrowseFooter