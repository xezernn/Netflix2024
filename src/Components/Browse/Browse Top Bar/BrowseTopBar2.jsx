import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import React from 'react'

function BrowseTopBar2() {
    const [scroll, setScroll] = useState(0)
    window.addEventListener("scroll", () => { setScroll(window.scrollY); })
    const languages = ["Almanca", "Arapça", "Danimarka Yapımı", "Endonezce", "Felemenkçe", "Filipince", "Flamanca", "Fransızca", "Hintçe", "İngilizce", "İspanyolca", "İsveççe", "İtalyanca", "Japonca", "Kantonca", "Korece", "Lehçe", "Lübnan dili", "Malayalamca", "Malayca", "Mandarin", "Marathi", "Norveççe", "Portekizce", "Tamilce", "Tayland Yapımı", "Teluguca Filmler", "Türkçe", "Vietnamca"];


    return (
        <div className={'fixed top-[41px] tabl:top-[68px] z-[11]  flex justify-between items-center  w-full px-[4%] min-h-[41px] tabl:h-[68px] transition-all duration-700 text-white ' + (scroll > 5 && "bg-[#141414]")}>
            <div className='flex justify-between w-full items-center'>
                <h1 className=' text-[14px] med:text-[22px] md:text-[32px] leading-[22px] font-[700]	 '>
                    Dile Göre Göz At
                </h1>
                <div className='flex gap-4'>

                    <div className='hidden xmd:block'>
                        <span className='mr-2'>Tercihlerinizi Seçin</span>
                        <Menu as="div" className="relative inline-block text-left">

                            <div>
                                <Menu.Button className="inline-flex w-full items-center justify-center gap-x-[40px] border-[white] text-white bg-[#000000e8] hover:bg-[#00000069] px-3 py-[5px] font-boldtext-[13px] font-[200] shadow-sm ring-1 ring-inset ring-gray-300">
                                    Orginal Dil
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
                                <Menu.Items className="absolute text-[14px] font-[200] left-0 z-10 mt-2 origin-top-right shadow-lg ring-1 bg-[#000000e6] text-white  ring-black ring-opacity-5 focus:outline-none flex  w-full min-w-[min-centent]">
                                    <div className="">
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                            Orginal Dil
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                                Dublaj
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                                Alt yazı
                                            </Link>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </div>

                    <div >

                        <Menu as="div" className="relative inline-block text-left">

                            <div>
                                <Menu.Button className="inline-flex w-full items-center justify-center gap-x-[100px] border-[white] text-white bg-[#000000e8] hover:bg-[#00000069] px-3 py-[5px] font-boldtext-[13px] font-[200] shadow-sm ring-1 ring-inset ring-gray-300">
                                    İngilisce
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
                                <Menu.Items className="absolute text-[14px] font-[200] left-0 z-10 mt-2 origin-top-right shadow-lg ring-1 bg-[#000000e6] text-white  ring-black ring-opacity-5 focus:outline-none flex max-h-[400px] overflow-y-scroll scrollbar scrollbar-thumb-[#ccc] scrollbar-width-[2px]  w-full min-w-[min-centent]">
                                    <div className="">

                                        {languages.map((item, i) => (
                                            <Menu.Item key={i}>
                                                <Link className=' hover:underline block px-2 py-2  text-sm w-full md:whitespace-nowrap'>
                                                    {item}
                                                </Link>
                                            </Menu.Item>
                                        ))
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </div>


                    <div className='hidden xmd:block'>
                        <span className='mr-2'>Sıralama ölçüdü</span>
                        <Menu as="div" className="relative inline-block text-left">

                            <div>
                                <Menu.Button className="inline-flex w-full items-center justify-center gap-x-[40px] border-[white] text-white bg-[#000000e8] hover:bg-[#00000069] px-3 py-[5px] font-boldtext-[13px] font-[200] shadow-sm ring-1 ring-inset ring-gray-300">
                                    Sizin için önerilen
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
                                <Menu.Items className="absolute text-[14px] font-[200] left-0 z-10 mt-2 origin-top-right shadow-lg ring-1 bg-[#000000e6] text-white  ring-black ring-opacity-5 focus:outline-none flex  w-full min-w-[min-centent]">
                                    <div className="">
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                                Sizin için öneriler
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                                Çıkış Yılı
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                                A-Z
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className=' hover:underline block px-2 py-2  text-sm w-[min-centent] md:whitespace-nowrap'>
                                                Z-A
                                            </Link>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default BrowseTopBar2