import React, { useEffect, useRef, useState } from 'react'
import video from '../../assets/playerVideo.mp4'
import { Link } from 'react-router-dom'
function VideoPlayer() {
	const videoRef = useRef(null)
	const [pouse, setPouse] = useState(true)
	const [mute, setMute] = useState(true)
	const [hidden, setHidden] = useState(true)
	const [width, setWidth] = useState(0)

	function handlePlay() {
		pouse ? videoRef.current.play() : videoRef.current.pause()
		setPouse(!pouse)
	}

	function skipForward(x) {
		if (videoRef.current) {
			videoRef.current.currentTime += x;
		}
	}

	function rateSpeed(x) {
		if (videoRef.current) {
			videoRef.current.playbackRate = x;
		}
	}

	function muteVideo() {
		if (videoRef.current) {
			videoRef.current.muted = mute
			setMute(!mute)
		}
	}

	function openFullscreen() {
		if (videoRef.current.requestFullscreen) {
			videoRef.current.requestFullscreen();
		} else if (videoRef.current.webkitRequestFullscreen) {
			videoRef.current.webkitRequestFullscreen();
		} else if (videoRef.current.msRequestFullscreen) {
			videoRef.current.msRequestFullscreen();
		}
	}

	function miniScreen() {
		if (videoRef.current) {
			videoRef.current.requestPictureInPicture()
		}
	}


	useEffect(() => {
		function progressLoop() {
			setInterval(() => {
				if (videoRef.current && videoRef.current.currentTime !== 0) {
					setWidth((videoRef.current.currentTime / videoRef.current.duration) * 100);
				}
			}, 40);
		}

		progressLoop();

		return () => {
			clearInterval(progressLoop);
		};
	}, []);


	return (
		<>
			<div  className='relative h-screen bg-black' >
				<div className='absolute left-0 right-0 bottom-[5%] top-[5%] z-[10]  '>
					<video
						className='w-full h-full object-cover'
						ref={videoRef}
						src={video}
					/>

					<div onClick={handlePlay} className='absolute top-[5%] bottom-[14%] z-[20] w-full h-80% '></div>

				</div>

				<div className='absolute inset-0 z-20 text-white h-[50px] w-full  ' >
					<div className={`fixed top-[4%] px-[2%] flex w-full justify-between ` + (!hidden && "hidden")}>
						<Link to={"/browse"}>
							<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" aria-labelledby=":rcr:" aria-hidden="true">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41421 10.9998L21 10.9998L21 12.9998L6.41421 12.9998L11.7071 18.2927L10.2929 19.7069L3.29289 12.7069C2.90237 12.3164 2.90237 11.6832 3.29289 11.2927L10.2929 4.29272L11.7071 5.70694L6.41421 10.9998Z" fill="currentColor"></path>
							</svg>
						</Link>

						<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Flag" aria-labelledby=":r76:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V4V9.57143V22H4L4 10.5789C5.85067 10.608 7.2411 10.721 9 10.9127V13.5714C9 14.0183 9.2965 14.4109 9.72632 14.5332C13.0256 15.4721 15.8727 16 21 16C21.5523 16 22 15.5523 22 15V8.42857C22 7.87629 21.5523 7.42857 21 7.42857C18.6167 7.42857 17.0614 7.31194 15 7.08734V4.42857C15 3.98169 14.7035 3.58906 14.2737 3.46675C10.9744 2.52795 8.12734 2 3 2ZM4 8.57872C6.2574 8.613 7.85904 8.76736 10.1134 9.02478L11 9.12601V10.0183V12.8111C13.616 13.5166 16.0515 13.9337 20 13.9927V9.42128C17.7426 9.387 16.141 9.23264 13.8866 8.97522L13 8.87399V7.98168V5.18886C10.384 4.48336 7.94853 4.06629 4 4.00726V8.57872Z" fill="currentColor"></path></svg>
					</div>



					<div className={`fixed w-full bottom-0 z-30 h-[110px] px-[18px] flex flex-col justify-between ` + (!hidden && "hidden")}>
						<div className='relative flex items-center '>
							<div className='absolute w-[94%] left-0 h-[5px] bg-[gray] flex items-center '>
								<div style={{ width: width + "%" }} className={`h-full absolute bg-[red] flex items-center justify-end `}>
									<div className=' h-[12px] w-[12px] bg-[red] rounded-full  '></div>
								</div>
							</div>
							<div className='absolute right-0 ml-[12px] w-[5%] text-end'>
								33:88
							</div>
						</div>

						<div className='h-[110px] flex justify-between items-center '>
							<div className='flex gap-[27px]'>
								<div onClick={handlePlay} >
									{pouse ?
										<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Play" aria-labelledby=":rk0:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
										:
										<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Pause" aria-labelledby=":r93:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3C4.22386 3 4 3.22386 4 3.5V20.5C4 20.7761 4.22386 21 4.5 21H9.5C9.77614 21 10 20.7761 10 20.5V3.5C10 3.22386 9.77614 3 9.5 3H4.5ZM14.5 3C14.2239 3 14 3.22386 14 3.5V20.5C14 20.7761 14.2239 21 14.5 21H19.5C19.7761 21 20 20.7761 20 20.5V3.5C20 3.22386 19.7761 3 19.5 3H14.5Z" fill="currentColor"></path></svg>
									}
								</div>

								<div>
									<svg onClick={() => { skipForward(-10) }} className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Back10" aria-labelledby=":rk1:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0198 2.04817C13.3222 1.8214 15.6321 2.39998 17.5557 3.68532C19.4794 4.97066 20.8978 6.88324 21.5694 9.09717C22.241 11.3111 22.1242 13.6894 21.2388 15.8269C20.3534 17.9643 18.7543 19.7286 16.714 20.8192C14.6736 21.9098 12.3182 22.2592 10.0491 21.8079C7.77999 21.3565 5.73759 20.1323 4.26989 18.3439C2.80219 16.5555 2 14.3136 2 12L0 12C-2.74181e-06 14.7763 0.962627 17.4666 2.72387 19.6127C4.48511 21.7588 6.93599 23.2278 9.65891 23.7694C12.3818 24.3111 15.2083 23.8918 17.6568 22.5831C20.1052 21.2744 22.0241 19.1572 23.0866 16.5922C24.149 14.0273 24.2892 11.1733 23.4833 8.51661C22.6774 5.85989 20.9752 3.56479 18.6668 2.02238C16.3585 0.479973 13.5867 -0.214321 10.8238 0.0578004C8.71195 0.265799 6.70517 1.02858 5 2.2532V1H3V5C3 5.55228 3.44772 6 4 6H8V4H5.99999C7.45608 2.90793 9.19066 2.22833 11.0198 2.04817ZM2 4V7H5V9H1C0.447715 9 0 8.55228 0 8V4H2ZM14.125 16C13.5466 16 13.0389 15.8586 12.6018 15.5758C12.1713 15.2865 11.8385 14.8815 11.6031 14.3609C11.3677 13.8338 11.25 13.2135 11.25 12.5C11.25 11.7929 11.3677 11.1758 11.6031 10.6488C11.8385 10.1217 12.1713 9.71671 12.6018 9.43388C13.0389 9.14463 13.5466 9 14.125 9C14.7034 9 15.2077 9.14463 15.6382 9.43388C16.0753 9.71671 16.4116 10.1217 16.6469 10.6488C16.8823 11.1758 17 11.7929 17 12.5C17 13.2135 16.8823 13.8338 16.6469 14.3609C16.4116 14.8815 16.0753 15.2865 15.6382 15.5758C15.2077 15.8586 14.7034 16 14.125 16ZM14.125 14.6501C14.5151 14.6501 14.8211 14.4637 15.043 14.0909C15.2649 13.7117 15.3759 13.1814 15.3759 12.5C15.3759 11.8186 15.2649 11.2916 15.043 10.9187C14.8211 10.5395 14.5151 10.3499 14.125 10.3499C13.7349 10.3499 13.4289 10.5395 13.207 10.9187C12.9851 11.2916 12.8741 11.8186 12.8741 12.5C12.8741 13.1814 12.9851 13.7117 13.207 14.0909C13.4289 14.4637 13.7349 14.6501 14.125 14.6501ZM8.60395 15.8554V10.7163L7 11.1405V9.81956L10.1978 9.01928V15.8554H8.60395Z" fill="currentColor"></path></svg>
								</div>

								<div>

									<svg onClick={() => { skipForward(10) }} className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Forward10" aria-labelledby=":rk2:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.4443 3.68532C8.36795 2.39998 10.6778 1.8214 12.9802 2.04817C14.8093 2.22833 16.5439 2.90793 18 4H16V6H20C20.5523 6 21 5.55229 21 5V1H19V2.2532C17.2948 1.02859 15.2881 0.2658 13.1762 0.057802C10.4133 -0.214319 7.64154 0.479975 5.33316 2.02238C3.02478 3.56479 1.32262 5.85989 0.516718 8.51661C-0.289188 11.1733 -0.148981 14.0273 0.913451 16.5922C1.97588 19.1572 3.8948 21.2744 6.34325 22.5831C8.79169 23.8918 11.6182 24.3111 14.3411 23.7694C17.064 23.2278 19.5149 21.7588 21.2761 19.6127C23.0374 17.4666 24 14.7763 24 12L22 12C22 14.3136 21.1978 16.5555 19.7301 18.3439C18.2624 20.1323 16.22 21.3565 13.9509 21.8079C11.6818 22.2592 9.32641 21.9098 7.28604 20.8192C5.24567 19.7286 3.64657 17.9643 2.76121 15.8269C1.87585 13.6894 1.75901 11.3111 2.4306 9.09718C3.10219 6.88324 4.52065 4.97067 6.4443 3.68532ZM22 4V7H19V9H23C23.5523 9 24 8.55229 24 8V4H22ZM12.6018 15.5758C13.0389 15.8586 13.5466 16 14.125 16C14.7034 16 15.2078 15.8586 15.6382 15.5758C16.0753 15.2865 16.4116 14.8815 16.6469 14.3609C16.8823 13.8338 17 13.2135 17 12.5C17 11.7929 16.8823 11.1759 16.6469 10.6488C16.4116 10.1217 16.0753 9.71671 15.6382 9.43389C15.2078 9.14463 14.7034 9 14.125 9C13.5466 9 13.0389 9.14463 12.6018 9.43389C12.1713 9.71671 11.8385 10.1217 11.6031 10.6488C11.3677 11.1759 11.25 11.7929 11.25 12.5C11.25 13.2135 11.3677 13.8338 11.6031 14.3609C11.8385 14.8815 12.1713 15.2865 12.6018 15.5758ZM15.043 14.0909C14.8211 14.4637 14.5151 14.6501 14.125 14.6501C13.7349 14.6501 13.429 14.4637 13.207 14.0909C12.9851 13.7117 12.8741 13.1814 12.8741 12.5C12.8741 11.8186 12.9851 11.2916 13.207 10.9187C13.429 10.5395 13.7349 10.3499 14.125 10.3499C14.5151 10.3499 14.8211 10.5395 15.043 10.9187C15.2649 11.2916 15.3759 11.8186 15.3759 12.5C15.3759 13.1814 15.2649 13.7117 15.043 14.0909ZM8.60395 10.7163V15.8554H10.1978V9.01929L7 9.81956V11.1405L8.60395 10.7163Z" fill="currentColor"></path></svg>

								</div>

								<div onClick={muteVideo}>
									<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="VolumeMedium" aria-labelledby=":rk3:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM17.0709 4.92897C18.9462 6.80433 19.9998 9.34787 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87831 17.157 7.84347 15.6567 6.34318L17.0709 4.92897ZM14.2428 7.7574C15.368 8.88262 16.0001 10.4087 16.0001 12C16.0001 13.5913 15.368 15.1175 14.2428 16.2427L12.8285 14.8285C13.5787 14.0783 14.0001 13.0609 14.0001 12C14.0001 10.9392 13.5787 9.92176 12.8285 9.17161L14.2428 7.7574Z" fill="currentColor"></path></svg>
								</div>
							</div>
							<div className='hidden med:block'>
								<h1><strong>One Day</strong> E1 <span className='ml-[4px]'>Episode 1</span></h1>
							</div>
							<div className='flex gap-[27px]'>
								<div>
									<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="NextEpisode" aria-labelledby=":rk4:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 3H20V21H22V3ZM4.28615 3.61729C3.28674 3.00228 2 3.7213 2 4.89478V19.1052C2 20.2787 3.28674 20.9977 4.28615 20.3827L15.8321 13.2775C16.7839 12.6918 16.7839 11.3082 15.8321 10.7225L4.28615 3.61729ZM4 18.2104V5.78956L14.092 12L4 18.2104Z" fill="currentColor"></path></svg>
								</div>
								<div onClick={miniScreen} className='mr-[27px]'>
									<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Episodes" aria-labelledby=":rk5:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 5H22V13H24V5C24 3.89543 23.1046 3 22 3H8V5ZM18 9H4V7H18C19.1046 7 20 7.89543 20 9V17H18V9ZM0 13C0 11.8954 0.895431 11 2 11H14C15.1046 11 16 11.8954 16 13V19C16 20.1046 15.1046 21 14 21H2C0.895431 21 0 20.1046 0 19V13ZM14 19V13H2V19H14Z" fill="currentColor"></path></svg>
								</div>

								<div >
									<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Subtitles" aria-labelledby=":rk6:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3V17C23 17.5523 22.5523 18 22 18H19V21C19 21.3688 18.797 21.7077 18.4719 21.8817C18.1467 22.0557 17.7522 22.0366 17.4453 21.8321L11.6972 18H2C1.44772 18 1 17.5523 1 17V3ZM3 4V16H12H12.3028L12.5547 16.1679L17 19.1315V17V16H18H21V4H3ZM10 9L5 9V7L10 7V9ZM19 11H14V13H19V11ZM12 13L5 13V11L12 11V13ZM19 7H12V9H19V7Z" fill="currentColor"></path></svg>
								</div>

								<div className='relative hoverElem4 '>
									<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="InternetSpeed" aria-labelledby=":rk7:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0569 6.27006C15.1546 2.20629 8.84535 2.20629 4.94312 6.27006C1.01896 10.3567 1.01896 16.9985 4.94312 21.0852L3.50053 22.4704C-1.16684 17.6098 -1.16684 9.7454 3.50053 4.88481C8.18984 0.0013696 15.8102 0.0013696 20.4995 4.88481C25.1668 9.7454 25.1668 17.6098 20.4995 22.4704L19.0569 21.0852C22.981 16.9985 22.981 10.3567 19.0569 6.27006ZM15 14.0001C15 15.6569 13.6569 17.0001 12 17.0001C10.3431 17.0001 9 15.6569 9 14.0001C9 12.3432 10.3431 11.0001 12 11.0001C12.4632 11.0001 12.9018 11.105 13.2934 11.2924L16.2929 8.29296L17.7071 9.70717L14.7076 12.7067C14.895 13.0983 15 13.5369 15 14.0001Z" fill="currentColor"></path></svg>
									<div id='hoverDiv4' className='absolute hidden p-4 rounded bg-[#262626] w-[400px] tabl:w-[750px] h-[150px] tabl:h-[200px] bottom-[100%] right-[-200%] '>
										<h1 className='font-[500] text-[16px] tabl:text-[27px] '  >Playback Speed</h1>
										<div class=" grid w-full h-[50px] place-items-center mt-3 tabl:px-[20px]">
											<div class="flex justify-between w-full h-[1px] bg-gray-200 ">
												<div onClick={() => { rateSpeed(0.5) }} className='flex flex-col items-start'>
													<div className='max-w-[min-content]'>
														<input type="radio" name="option" id="1" value="1" class="peer hidden" />
														<label for="1" class="block cursor-pointer select-none rounded-full w-[20px] h-[20px] bg-[grey] text-center mt-[-9px] peer-checked:bg-blue-500"></label>
													</div>
													<h3 className='mt-[10px] text-[18px]'>0.5x</h3>
												</div>
												<div onClick={() => { rateSpeed(0.75) }} className='flex flex-col items-center'>
													<div className='max-w-[min-content] text-end'>
														<input type="radio" name="option" id="2" value="1" class="peer hidden" />
														<label for="2" class="block cursor-pointer select-none rounded-full w-[20px] h-[20px] bg-[grey] text-center mt-[-9px] peer-checked:bg-blue-500"></label>
													</div>
													<h3 className='mt-[10px] mr-[-10px]  text-[18px]'>0.75x</h3>
												</div>
												<div onClick={() => { rateSpeed(1) }} className='flex flex-col items-center'>
													<div className='max-w-[min-content]'>
														<input type="radio" name="option" id="3" value="1" class="peer hidden" />
														<label for="3" class="block cursor-pointer select-none rounded-full w-[20px] h-[20px] bg-[grey] text-center mt-[-9px] peer-checked:bg-blue-500"></label>
													</div>
													<h3 className='mt-[10px] text-[18px]'>1x</h3>
												</div>
												<div onClick={() => { rateSpeed(1.25) }} className='flex flex-col items-center'>
													<div className='max-w-[min-content]'>
														<input type="radio" name="option" id="4" value="1" class="peer hidden" />
														<label for="4" class="block cursor-pointer select-none rounded-full w-[20px] h-[20px] bg-[grey] text-center mt-[-9px] peer-checked:bg-blue-500"></label>
													</div>
													<h3 className='mt-[10px] text-[18px]'>1.25x</h3>
												</div>
												<div onClick={() => { rateSpeed(1.5) }} className='flex flex-col items-end'>
													<div className='max-w-[min-content] text-end'>
														<input type="radio" name="option" id="5" value="1" class="peer hidden" />
														<label for="5" class="block cursor-pointer select-none rounded-full w-[20px] h-[20px] bg-[grey] text-center mt-[-9px] peer-checked:bg-blue-500"></label>
													</div>
													<h3 className='mt-[10px] text-[18px]'>1.5x</h3>
												</div>

											</div>
										</div>
									</div>

								</div>

								<div onClick={openFullscreen}>
									<svg className='w-[4vw] h-[4vw] max-w-[40px] max-h-[40px] hover:scale-[1.15]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="FullscreenEnter" aria-labelledby=":rk8:" aria-hidden="true" data-uia="control-fullscreen-enter"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 3.89543 0.895431 3 2 3H9V5H2V9H0V5ZM22 5H15V3H22C23.1046 3 24 3.89543 24 5V9H22V5ZM2 15V19H9V21H2C0.895431 21 0 20.1046 0 19V15H2ZM22 19V15H24V19C24 20.1046 23.1046 21 22 21H15V19H22Z" fill="currentColor"></path></svg>
								</div>

							</div>
						</div>


					</div>
				</div>
			</div >
		</>
	)
}

export default VideoPlayer