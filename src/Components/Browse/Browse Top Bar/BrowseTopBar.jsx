import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import React from 'react'

function BrowseTopBar({elem}) {
    const [scroll, setScroll] = useState(0)
    window.addEventListener("scroll", () => {setScroll(window.scrollY);})


    return (
        <div className={'fixed top-[41px] tabl:top-[68px] z-[20]  flex justify-between items-center  w-full px-[4%] h-[41px] tabl:h-[68px] transition-all duration-700 text-white ' +(scroll > 5 && "bg-[#141414]") }>
            <div className='flex gap-16 items-center'>
                <h1 className=' text-[22px] md:text-[32px] leading-[22px] font-[700]	 '>
                    {
                        elem ? elem : "Diziler"
                    }
                </h1>
                <div>
                    <Menu as="div" className="relative inline-block text-left">

                        <div>
                            <Menu.Button className="inline-flex w-full items-center justify-center gap-x-[40px] border-[white] text-white bg-[#000000e8] hover:bg-[#00000069] px-3 py-[1px] text-[13px] font-[200] shadow-sm ring-1 ring-inset ring-gray-300">
                                Türler
                                <span className='border-[white] border-t-[5px]  border-l-[5px] border-r-[5px] border-b-[0] border-t-[#fff]  border-l-[transparent] border-r-[transparent] border-b-[transparent]   '></span>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute text-[14px] font-[200] left-0 z-10 mt-2 origin-top-right shadow-lg ring-1 bg-[#000000e6] text-white  ring-black ring-opacity-5 focus:outline-none flex  md:w-auto min-w-[min-centent]">
                                <div className="">
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Aksiyon
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Amerikan Dizileri
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Anime
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Asya Yapımlan
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Avrupa Yapımları
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Belgesel Dizileri
                                        </Link>
                                    </Menu.Item>
                                </div>
                                <div className=" ">
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Bilim Kurgu ve Fantastik
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Bilim ve Doğa
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Çocuk
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Dramalar
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Genç
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Gerilim
                                        </Link>
                                    </Menu.Item>
                                </div>
                                <div className=" ">
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            İngiliz Yapımları
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Komediler
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Korku
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Reality Programları ve Talk Şovlar
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Romantizm
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Suç
                                        </Link>
                                    </Menu.Item>
                                </div>

                            </Menu.Items>
                        </Transition>
                    </Menu>

                </div>


            </div>
            <div className='flex justify-around items-center w-[88px] h-[30px] border text-white cursor-pointer '>
                <div className=''>
                    <svg className='h-[18px] w-[18px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="List" aria-labelledby=":rl:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path></svg>
                </div>
                <div>
                    <svg className='h-[18px] w-[18px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="GridFill" aria-labelledby=":rm:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z" fill="currentColor"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default BrowseTopBar