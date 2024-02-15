import React, { useContext, useState } from 'react'
import Bg from "../../assets/img/bgHeader.jpg"
import Tv from "../../assets/img/tv.png"
import Desk from "../../assets/img/desktop.png"
import Tel from "../../assets/img/tel.jpg"
import Kids from "../../assets/img/kids.png"
import boxshot from "../../assets/img/boxshot.png"
import DowIcon from "../../assets/img/dowIcon.gif"
import video1 from '../../assets/img/video1.mp4'
import video2 from '../../assets/img/video2.mp4'
import { TECollapse } from "tw-elements-react";
import { Link } from 'react-router-dom'
import { User } from '../../Context/UserContext'

function HomePage() {

	const {email, setEmail} = useContext(User)
	// console.log(email);
	const [activeElement, setActiveElement] = useState("");

	const handleClick = (value) => {
		if (value === activeElement) setActiveElement("")
		else setActiveElement(value)
	};


	return (
		<div className="bg-black netflixFont">

			<header style={{ background: `url(${Bg}) center/cover` }} className='h-[67vh] tabl:h-[100vh] '>
				<div className='h-full overflow-clip bgGradient  ' >
					<div className='bgOpacity h-full relative'>
						<div className="container max-w-[initial]  med:w-600 p-6 absolute top-0 tabl:w-[80%] tabl:m-auto tabl:left-2/4 tabl:-translate-x-2/4 ">
							<div className='flex justify-between items-center -mt-[4px] -ml-2'>
								<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="w-[90px] h-[24px] tabl:w-[9.25rem] tabl:h-[2.5rem] mt-2 ml-2">
									<svg viewBox="0 0 111 30" fill='#E50914' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
								</Link>

								<div className="items-center flex-shrink-0 flex gap-2 tabl:gap-6 ">

									<div className="relative text-white flex items-center w-16 h-[32px] rounded-2xl med:w-[160px] med:px-[10px] bg-[#161616b3] ">
										<div className="absolute left-[20%] top-[15%]   ">
											<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
												stroke="currentColor" >
												<path stroke-linecap="round" stroke-linejoin="round"
													d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
											</svg>
										</div>
										<select className='border-[#808080b3] border z-10 rounded absolute p-[5px] inset-0 bg-transparent appearance-none text-[#00000000] selection:hidden med:selection:block med:text-white med:ml-[20px] ' name="" id="">
											<option className='text-center text-black bg-transparent  ' value="english">English</option>
											<option className='text-center text-black bg-transparent  ' value="russian">Русский</option>
										</select>

										<div className="absolute right-[10%] top-[25%] ">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
												className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true">
												<path fill-rule="evenodd" clip-rule="evenodd"
													d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
													fill="currentColor"></path>
											</svg>
										</div>
									</div>

									<button className="border rounded-[4px] font-[500] border-[#e50914] cursor-pointer text-[14px] py-1 px-4 bg-[#e50914] text-white min-h-[30px] ">Sign in</button>
								</div>
							</div>
						</div>
						<div className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-white w-[85%] mt-8 text-center'>
							<h1 className='text-[2rem] font-[700] tabl:text-[2.7rem] tabl:font-[900] '>Unlimited movies, TV shows, and more</h1>
							<p className='mt-4 text-[1.125rem] tabl:text-[1.5rem]'>
								Watch anywhere. Cancel anytime.
							</p>
							<div className='flex flex-col mt-6 w-full '>
								<p className='leading-[1.5] text-[1.125rem] tabl:text-[1.5rem] '>
									Ready to watch? Enter your email to create or restart your membership.
								</p>
								<div className='flex flex-col w-full items-center gap-4 max-w-[36.625rem] mx-auto mt-4 med:flex-row '>
									<input onChange={(e)=>{setEmail(e.target.value)}} type="email" className='text-white leading-[1.5] text-[1rem] px-4 pb-2 pt-3 min-h-4 min-w-4 border border-[#808080b3] border-solid rounded bg-[#161616b3] !w-full tabl:py-4  ' placeholder="Email address" id="" />
									<Link to="signup/registration" className='min-h-[2.9rem] min-w-[154px] tabl:w-[240px] tabl:h-full flex bg-[#E50914] border-0 justify-center items-center rounded text-[1.125rem] py-2 px-4 tabl:px-6 tabl:py-4'>
										<span className='font-[700] whitespace-nowrap '>Get Started</span>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

			</header>

			<section className='border-t-[8px] border-[#232323]'>
				<div className='flex w-[90%] flex-col text-white m-auto text-center py-[56px]  tabl:flex-row tabl:items-center tabl:w-[77%] tabl:justify-center  '  >
					<div className="tabl:w-2/4 ">
						<h2 className='text-[2rem] font-[700] leading-normal tabl:text-[3rem] tabl:font-[900] tabl:text-start '>Enjoy on your TV</h2>
						<p className="my-4 text-[1.125rem] tabl:text-[1.5rem] tabl:text-start ">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
					</div>
					<div className="w-full relative mt-6 mx-auto md:max-w-[690px] tabl:w-2/4  ">
						<img className="w-full" src={Tv} alt="" />
						<img className="w-full absolute inset-0 z-10 " src={Tv} alt="" />
						<div className="absolute inset-0 z-[9]">
							<video className='w-[99%] m-auto' autoplay="autoplay" muted="true" loop="true">
								<source src={video1} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</section>


			<section className='border-t-[8px] border-[#232323]'>
				<div className='flex w-[90%] flex-col text-white m-auto text-center py-[56px]  tabl:flex-row-reverse tabl:items-center tabl:w-[82%]  '  >
					<div className="tabl:w-2/4 ">
						<h2 className='text-[2rem] font-[700] leading-normal tabl:text-[3rem] tabl:font-[900] tabl:text-start '>Download your shows to watch offline</h2>
						<p className="my-4 text-[1.125rem] tabl:text-[1.5rem] tabl:text-start ">Save your favorites easily and always have something to watch.</p>
					</div>
					<div className="w-full relative mt-6 mx-auto md:max-w-[690px] tabl:w-2/4 ">
						<img className='w-full' src={Tel} alt="" />
						<div className="flex justify-between items-center border border-[#333] rounded-[12px] overflow-hidden w-[60%] bg-black py-1 px-[10px] absolute bottom-[10%] left-[20%] tabl:w-2/4 tabl:left-[24.5%]   ">
							<img className=" h-[3rem] tabl:h-[5rem]" src={boxshot} alt="" />
							<div    >
								<strong>Stranger Things</strong>
								<p className='text-[0.75rem] text-[#0071eb]  '>
									Downloading...
								</p>
							</div>
							<img className=" h-[2rem] tabl:h-[3rem] " src={DowIcon} alt="" />
						</div>

					</div>
				</div>
			</section>

			<section className='border-t-[8px] border-[#232323]'>
				<div className='flex w-[90%] flex-col text-white m-auto text-center py-[56px]  tabl:flex-row tabl:items-center tabl:w-[82%]  '  >
					<div className="tabl:w-2/4 ">
						<h2 className='text-[2rem] font-[700] leading-normal tabl:text-[3rem] tabl:font-[900] tabl:text-start '>Watch everywhere</h2>
						<p className="my-4 text-[1.125rem] tabl:text-[1.5rem] tabl:text-start ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
					</div>
					<div className="w-full relative mt-6 mx-auto md:max-w-[690px] tabl:w-2/4  ">
						<img className="w-full" src={Desk} alt="" />
						<img className="w-full absolute inset-0 z-10 " src={Desk} alt="" />
						<div className="absolute top-[10%] right-[0] -left-[10px] bottom-0 z-[9]">
							<video className='w-[60%] m-auto' autoplay="autoplay" muted="true" loop="true">
								<source src={video2} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</section>

			<section className='border-t-[8px] border-[#232323]'>
				<div className='flex w-[90%] flex-col text-white m-auto text-center py-[56px]  tabl:flex-row-reverse tabl:items-center tabl:w-[82%]  '  >
					<div className="tabl:w-2/4 ">
						<h2 className='text-[2rem] font-[700] leading-normal tabl:text-[3rem] tabl:font-[900] tabl:text-start '>Create profiles for kids</h2>
						<p className="my-4 text-[1.125rem] tabl:text-[1.5rem] tabl:text-start ">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
					</div>
					<div className="w-full relative mt-6 mx-auto md:max-w-[690px] tabl:w-2/4 ">
						<img className='w-full' src={Kids} alt="" />
					</div>
				</div>
			</section>

			<section className='border-t-[8px] border-[#232323] netflixFont'>
				<div className='w-[90%] text-white m-auto text-center py-[56px] med:py-[72px] tabl:w-[77%]  '  >
					<h2 className='text-[2rem] font-[700] leading-normal tabl:text-[3rem] tabl:font-[900] '>
						Frequently Asked Questions
					</h2>

					{/* Burdan sonra acardion faq menu gelir */}
					<div className='flex flex-col gap-2 mt-6'>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element1" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element1")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>What is Netflix?</span>
									<span
										className={`${activeElement === "element1"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element1"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
									<br /><br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
								</div>
							</TECollapse>
						</div>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element2" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element2")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>How much does Netflix cost?</span>
									<span
										className={`${activeElement === "element2"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element2"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.
								</div>
							</TECollapse>
						</div>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element3" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element3")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>Where can I watch?</span>
									<span
										className={`${activeElement === "element3"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element3"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
									<br /><br />
									You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
								</div>
							</TECollapse>
						</div>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element4" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element4")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>How do I cancel?</span>
									<span
										className={`${activeElement === "element4"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element4"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
								</div>
							</TECollapse>
						</div>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element5" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element5")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>What can I watch on Netflix?</span>
									<span
										className={`${activeElement === "element5"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element5"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
								</div>
							</TECollapse>
						</div>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element6" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element6")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>Is Netflix good for kids?</span>
									<span
										className={`${activeElement === "element6"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element6"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.                                    <br /><br />
									Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
								</div>
							</TECollapse>
						</div>
						<div className="rounded-none  bg-white dark:border-neutral-600 dark:bg-neutral-800">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`${activeElement === "element7" &&
										`text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
										} group relative flex w-full items-center rounded-none border-0 bg-white py-[30px]  px-6 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
									type="button"
									onClick={() => handleClick("element7")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span className='text-[18px] tabl:text-[24px] '>Why am I seeing this language?</span>
									<span
										className={`${activeElement === "element7"
											? `rotate-[-135deg] -mr-1`
											: `rotate-0 fill-[#212529] dark:fill-white`
											} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-name="Plus"
											alt="">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element7"}
								className="!mt-0 !rounded-b-none !shadow-none"
							>
								<div className="p-6 text-[1.125rem] text-start transition ">
									Your browser preferences determine the language shown here.
								</div>
							</TECollapse>
						</div>

					</div>

					<div className='mt-[45px] text-center'>
						<p className='my-4 text-[1.125rem] tabl:text-[1.5rem] '>Ready to watch? Enter your email to create or restart your membership.</p>
						<div className='flex flex-col items-center gap-4 max-w-[36.625rem] mx-auto med:flex-row '>
							<input onChange={(e)=>{setEmail(e.target.value)}} type="email" className='text-white leading-[1.5] text-[1rem] px-4 pb-2 pt-3 min-h-4 min-w-4 border border-[#808080b3] border-solid rounded bg-[#161616b3] w-full  ' placeholder="Email address" id="" />
							<Link to={"signup/registration"} className='min-h-[3rem] min-w-[154px] w-auto flex bg-[#E50914] justify-center items-center rounded text-[1.125rem] py-2 px-4'>
								<span className='font-[700] '>Get Started</span>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<footer className='border-t-[8px] border-[#232323]'>
				<div className='w-[90%] m-auto py-[32px] med:py-[72px]'>

					<div className='mb-3'>
						<a href="#" className='text-[#ffffffb3] text-[16px]'>Questions? Contact us. </a>
					</div>

					<ul className="text-[14px] text-[#ffffffb3] w-full underline flex justify-between ">
						<div className='flex flex-col w-2/4 tabl:flex-row '>
							<div className='flex flex-col tabl:w-2/4' >
								<li className='w-full mt-4 ml-3 '>
									<a className="  " href="">FAQ</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Help Center</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Account</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Media Center</a>
								</li>
							</div>
							<div className='flex flex-col tabl:w-2/4' >
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Investor Relations</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Jobs</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Ways to Watch</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Terms of Use</a>
								</li>
							</div>

						</div>
						<div className='flex flex-col w-2/4 tabl:flex-row ' >
							<div className='flex flex-col tabl:w-2/4' >
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Privacy</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="#">Cookie Preferences</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Corporate Information</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Contact Us</a>
								</li>
							</div>
							<div className='flex flex-col tabl:w-2/4' >
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Speed Test</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Legal Notices</a>
								</li>
								<li className='w-full mt-4 ml-3 '>
									<a className="   " href="">Only on Netflix</a>
								</li>
							</div>
						</div>
					</ul>

					<div className='W-full mt-3'>
						<div className="relative text-white flex items-center w-16 h-[32px] ml-3 med:-ml-2  med:w-[160px] med:px-[10px] ">
							<div className="absolute left-[20%] top-[15%]   ">
								<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
									stroke="currentColor" >
									<path stroke-linecap="round" stroke-linejoin="round"
										d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
								</svg>
							</div>
							<select className='border-[#808080b3] border z-10 rounded absolute p-[5px] inset-0 bg-transparent appearance-none text-[#00000000] selection:hidden med:selection:block med:text-white med:ml-[20px] ' name="" id="">
								<option className='text-center text-black bg-transparent  ' value="english">English</option>
								<option className='text-center text-black bg-transparent  ' value="russian">Русский</option>
							</select>

							<div className="absolute right-[10%] top-[25%] ">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
									className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
										fill="currentColor"></path>
								</svg>
							</div>
						</div>
					</div>
					<div className='w-full text-[#ffffffb3] text-[0.875rem] mt-6 ml-3 '>
						Netflix Azerbaijan
					</div>

				</div>

			</footer>
		</div>
	)
}

export default HomePage