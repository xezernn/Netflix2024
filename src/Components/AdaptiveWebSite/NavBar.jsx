import React, { useContext, useState } from 'react'
import { NavPro } from '../../Context/NavBar'
import bildiris1 from "../../assets/img/bildirisImg1.jpg"
import hesab from "../../assets/img/hesab.jpg"
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { logout } from '../../firebase';
import { logout as logoudHandle } from '../../Store/auth';
import { useDispatch, useSelector } from 'react-redux';


function NavBar() {

    const { nav } = useContext(NavPro)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchClick, setSearchClick] = useState(false)
    async function handleLogout() {
        await logout()
        dispatch(logoudHandle())
        navigate("/", { replace: true })
    }


    return (


        <div style={{ transform: nav ? `translateX(-100%)` : `translateX(0%)` }} className='fixed z-[50] top-[49px] h-[calc(100%-50px)] overflow-y-scroll transition-transform -translate-x-full bottom-0 text-[#808080] font-bold  w-[70%] bg-black pt-[10px] '>

            <div>
                <Link to={"/selectprofile"} className='flex gap-2 items-center mb-[5px] pl-5 '>
                    <img className='w-8 h-8' src={"https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZfhNS88u5ao0M3F5X4HRBGCFsqdb2nncDt32YQHoM-1BeLJq93H30hWyleqclSwt1jNGm6l0tkeefKiiCOLLL5gNjpSjS_Xlaij.png?r=bd7"} alt="profile icon" />
                    <div className='flex flex-col justify-start'>
                        <h5 className='text-[16px]'>Room 1</h5>
                        <p className='text-white text-[11.2px] font-normal mt-[-4px]'>Profili Değiştir</p>
                    </div>
                </Link>
            </div>
            <div className='pl-5 border-b border-b-[#808080] pb-5 '>
                <ul>
                    <li className='mb-[2px]'>
                        <Link>
                            Hesap
                        </Link>
                    </li>
                    <li className='mb-[2px]'>
                        <Link>
                            Yardım Merkezi
                        </Link>
                    </li>
                    <li className='mb-[2px]'>
                        <Link onClick={handleLogout}>
                            Netflix Oturumunu Kapat
                        </Link>
                    </li>
                </ul>
            </div>

            <ul className='pt-2'>
                <li className=''>
                    <NavLink to="/" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] border-l-[3px] border-l-[red] ">
                        Ana Sayfa
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Listem
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Gerilimler
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Suç
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Çocuk ve Aile
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Uluslararası Dizi ve Filmler
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Reality Programları
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Aksiyon
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Fantastik
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Komediler
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Bilim Kurgu
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Korku
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Stand-Up Komedisi
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Avrupa Yapımı Filmler ve
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Diziler
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Belgeseller
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Müzik ve Müzikaller
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Romantizm
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink to="/browse/list" className="inline-block pl-[17px] font-bold hover:text-[white] min-h-[32px] ">
                        Dramalar
                    </NavLink>
                </li>


            </ul>
        </div>
    )
}

export default NavBar