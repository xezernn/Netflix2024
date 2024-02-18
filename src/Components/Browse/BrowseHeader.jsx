import React, { useState } from 'react'
import bildiris1 from "../../assets/img/bildirisImg1.jpg"
import hesab from "../../assets/img/hesab.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../firebase';
import { logout as logoudHandle } from '../../Store/auth';
import { useDispatch, useSelector } from 'react-redux';

function BrowseHeader() {

    const navigate = useNavigate()
    // const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [searchClick, setSearchClick] = useState(false)
    async function handleLogout() {
        await logout()
        dispatch(logoudHandle())
        navigate("/", { replace: true })
    }

    const [scroll, setScroll] = useState(0)
    window.addEventListener("scroll", () => {setScroll(window.scrollY);})



    return (
        <header className={'gradProf transition-all duration-700 h-[41px] sm:px-4 tabl:h-[68px] flex items-center w-full ' + (scroll> 5 && "bg-[#141414] fixed " ) }>
            <div className='px-[1.5%] tabl:px-[2.9%] flex justify-between w-full '  >
                <div className='flex items-center gap-[12px] xlg:gap-[45px] '>
                    <Link to={"/browse"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='  w-[92.5px] h-[30px] ' viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#e50914" /></svg>
                    </Link>


                    <div className='hed:hidden hoverElem2 '>
                        <button className=" text-white text-[9px] sm:text-[12px] md:text-[14px] font-bold text-center inline-flex items-center " type="button">Göz at
                            <svg className="w-2.5 h-2.5 " viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"
                                data-name="CaretDown" aria-hidden="true">
                                <path
                                    d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>

                        <div id='hoverDiv2' className='z-[11] fixed left-0 sm:left-[5%] top-[3%] hidden h-40 w-[200px]  '>
                            <div id="dropdownHover" className={"z-10 fixed left-[5%] sm:left-[5%] top-[9%]  w-[55%] max-w-[260px] bg-black opacity-85 divide-y border-t-[3px] divide-gray-100  shadow  "}>
                                <ul className="py-2 text-sm  text-white" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <Link to={""} className="block py-4 text-center">Ana Sayfa</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="block py-4 text-center">Diziler</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="block py-4 text-center">Filmler</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="block py-4 text-center">En Yeniler</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="block py-4 text-center">Listem</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="block py-4 text-center">Dile Göre Göz At</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='hidden hed:block text-[white]'>
                        <ul className='flex gap-[18px] xlg:text-[14px] xlg:text-[#e5e5e5] text-[10.9px] font-[500] items-center '  >
                            <li className='font-bold'> <Link to={""}> Ana Sayfa </Link></li>
                            <li><Link to={""}> Diziler </Link></li>
                            <li><Link to={""}> Filmler </Link></li>
                            <li><Link to={""}> En Yeniler </Link></li>
                            <li><Link to={""}> Listem </Link></li>
                            <li><Link to={""}> Dile Göre Göz At </Link></li>

                        </ul>
                    </div>




                </div>

                <div className='flex items-center text-white mr-2 gap-3'>
                    <div className={'relative ' + (searchClick && "-top-[50%]")}>
                        <div className={"w-0" + (searchClick && ' w-[min-content] transition-[width] h-[35px] absolute right-0  border flex bg-black opacity-85 items-center gap-2 ')}>
                            <svg onClick={() => { setSearchClick(!searchClick) }} className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="MagnifyingGlass" aria-hidden="true"><path fill-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
                            {searchClick && <input type="text" className='h-full border-none bg-transparent outline-none text-white ' placeholder="İçerik, kişi, tür" id="" />}
                        </div>

                    </div>

                    <div className='py-[3px] px-[6px] hoverElem1 '>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Bell" aria-hidden="true"><path d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>

                        <div id='hoverDiv1' className='z-[11] fixed sm:right-[10%]  h-[100px] top-[1%]  min-w-[100px] hidden hed:hidden'>
                            <div className={"z-10 fixed right-[10%] top-[8%]  min-w-[350px] sm:min-w-[405px] bg-black opacity-85 divide-y border-t-[3px]  divide-gray-100  shadow  "}>
                                <ul className="py-2 text-sm max-h-[420px] overflow-y-scroll text-white">
                                    <li className='border-b border-b-[#737373]'>
                                        <Link className='flex p-3 gap-3 pb-4 ' to={""}>
                                            <div className='rounded overflow-hidden'>
                                                <img src={bildiris1} alt="" />
                                            </div>

                                            <div>
                                                <h5 className='text-[#e0dfdf]'>
                                                    Yeni içerik <br /> Kül
                                                </h5>
                                                <p className='text-[10px] text-[#737373] '>
                                                    1 hafta önce
                                                </p>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className='border-b border-b-[#737373]'>
                                        <Link className='flex p-3 gap-3 pb-4 ' to={""}>
                                            <div className='rounded overflow-hidden'>
                                                <img src={bildiris1} alt="" />
                                            </div>

                                            <div>
                                                <h5 className='text-[#e0dfdf]'>
                                                    Yeni içerik <br /> Kül
                                                </h5>
                                                <p className='text-[10px] text-[#737373] '>
                                                    1 hafta önce
                                                </p>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className='border-b border-b-[#737373]'>
                                        <Link className='flex p-3 gap-3 pb-4 ' to={""}>
                                            <div className='rounded overflow-hidden'>
                                                <img src={bildiris1} alt="" />
                                            </div>

                                            <div>
                                                <h5 className='text-[#e0dfdf]'>
                                                    Yeni içerik <br /> Kül
                                                </h5>
                                                <p className='text-[10px] text-[#737373] '>
                                                    1 hafta önce
                                                </p>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className='border-b border-b-[#737373]'>
                                        <Link className='flex p-3 gap-3 pb-4 ' to={""}>
                                            <div className='rounded overflow-hidden'>
                                                <img src={bildiris1} alt="" />
                                            </div>

                                            <div>
                                                <h5 className='text-[#e0dfdf]'>
                                                    Yeni içerik <br /> Kül
                                                </h5>
                                                <p className='text-[10px] text-[#737373] '>
                                                    1 hafta önce
                                                </p>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className='border-b border-b-[#737373]'>
                                        <Link className='flex p-3 gap-3 pb-4 ' to={""}>
                                            <div className='rounded overflow-hidden'>
                                                <img src={bildiris1} alt="" />
                                            </div>

                                            <div>
                                                <h5 className='text-[#e0dfdf]'>
                                                    Yeni içerik <br /> Kül
                                                </h5>
                                                <p className='text-[10px] text-[#737373] '>
                                                    1 hafta önce
                                                </p>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className='border-b border-b-[#737373]'>
                                        <Link className='flex p-3 gap-3 pb-4 ' to={""}>
                                            <div className='rounded overflow-hidden'>
                                                <img src={bildiris1} alt="" />
                                            </div>

                                            <div>
                                                <h5 className='text-[#e0dfdf]'>
                                                    Yeni içerik <br /> Kül
                                                </h5>
                                                <p className='text-[10px] text-[#737373] '>
                                                    1 hafta önce
                                                </p>
                                            </div>
                                        </Link>
                                    </li>





                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='h-[32px] w-8 rounded overflow-hidden  ' >

                        <div className='hoverElem3 '>

                            <Link className='flex' to={""}>
                                <img className='h-full' src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTxO1HAzIh18LDAY7Igs6qQ3GhmsclmpCllWnoojeSDD0lMm9hUCp-C4VGo3cT40xfg_7SpIoY6pmRIl-W7B5CN8kvXCBqM7n8_f.png?r=a4b" alt="" />
                                <div className='hidden xlg:block border-[white] border-t-[5px] border-l-[5px] border-r-[5px] border-b-[0px] ml-[10px] bg-white '>dfghjgfds</div>
                            </Link >

                            <div id='hoverDiv3' className='z-[11] fixed right-0 top-[5%] hidden  h-40 w-[200px]  '>
                                <div id="dropdownHover" className={"z-10 fixed right-[6%] top-[9%] w-[215px] bg-black opacity-85 divide-y divide-gray-100  shadow  "}>
                                    <ul className=" pt-[10px] text-sm  text-white" aria-labelledby="dropdownHoverButton">
                                        <li className=" px-[10px] py-[5px]">
                                            <Link to={"/selectprofile"} className="flex text-center gap-[10px]">

                                                <div className='w-8 h-8 rounded overflow-hidden'>
                                                    <img className='w-full' src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229" alt="" />
                                                </div>
                                                <div className='flex items-center justify-between w-[70%]'>
                                                    <span>Room 1</span>
                                                    <svg width="16" height="16" className='text-[#737373]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Lock" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="currentColor"></path></svg>
                                                </div>


                                            </Link>
                                        </li>
                                        <li className=" px-[10px] py-[5px]">
                                            <Link to={"/selectprofile"} className="flex text-center gap-[10px]">

                                                <div className='w-8 h-8 rounded overflow-hidden'>
                                                    <img src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYMk0Ck73kxh_jp_N-hnH8BuT3sFOjDnfyT_eCvlPFtzKXkfeYZi-9T8KWRf1RRGSlJZj5u3dH-mCenw6bx8kOYLk27V-pMb-2G2.png?r=a16" alt="" />
                                                </div>
                                                <div className='flex items-center justify-between w-[70%]'>
                                                    <span>Room 2</span>
                                                    <svg width="16" height="16" className='text-[#737373]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Lock" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="currentColor"></path></svg>
                                                </div>


                                            </Link>
                                        </li>
                                        <li className=" px-[10px] py-[5px]">
                                            <Link to={"/selectprofile"} className="flex text-center gap-[10px]">

                                                <div className='w-8 h-8 rounded overflow-hidden'>
                                                    <img src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e" alt="" />
                                                </div>
                                                <div className='flex items-center justify-between w-[70%]'>
                                                    <span>Room 3</span>
                                                    <svg width="16" height="16" className='text-[#737373]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Lock" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="currentColor"></path></svg>
                                                </div>


                                            </Link>
                                        </li>
                                        <li className=" px-[10px] pt-[5px] pb-[10px] border-b border-[#737373]">
                                            <Link to={"/selectprofile"} className="flex text-center gap-[10px]">

                                                <div className='w-8 h-8 rounded overflow-hidden'>
                                                    <img src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZfhNS88u5ao0M3F5X4HRBGCFsqdb2nncDt32YQHoM-1BeLJq93H30hWyleqclSwt1jNGm6l0tkeefKiiCOLLL5gNjpSjS_Xlaij.png?r=bd7" alt="" />
                                                </div>
                                                <div className='flex items-center justify-between w-[70%]'>
                                                    <span>Room 4</span>
                                                    <svg width="16" height="16" className='text-[#737373]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Lock" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="currentColor"></path></svg>
                                                </div>


                                            </Link>
                                        </li>


                                        <li className='border-b border-[#737373]' >

                                            <Link className='w-full ' to="">
                                                <img className='w-full pt-3' src={hesab} alt="" />
                                            </Link>
                                        </li>

                                        <li className=" px-[10px] py-[10px] text-center" >
                                            <Link onClick={handleLogout} to={"/"}>Netflix oturumunu kapat</Link>
                                        </li>

                                    </ul>


                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </header>
    )
}

export default BrowseHeader