import React from 'react'
import { Link } from 'react-router-dom'

function SelectProfile() {
    return (
        <div className="bg-[#141414] min-h-screen flex flex-col items-center justify-center ">
            <h1 className="text-gray-200 text-5xl">
                Kim izliyor?
            </h1>

            <div className="flex justify-center flex-wrap gap-5 mt-8 max-w-[80%] ">

                <Link to={'/browse'} className="flex flex-col min-w-[84px] max-w-[200px] min-h-[84px] max-h-[200px]   items-center group gap-2">
                    <img className="rounded border-2 w-full h-[150px] border-transparent group-hover:border-2  group-hover:border-gray-300" src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Room 1 </p>
                </Link >

                <Link to={'/browse'} className="flex flex-col min-w-[84px] max-w-[200px] min-h-[84px] max-h-[200px]  items-center group gap-2">
                    <img className="rounded border-2 w-full h-[150px] border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYMk0Ck73kxh_jp_N-hnH8BuT3sFOjDnfyT_eCvlPFtzKXkfeYZi-9T8KWRf1RRGSlJZj5u3dH-mCenw6bx8kOYLk27V-pMb-2G2.png?r=a16" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Room 2 </p>
                </Link >

                <Link to={'/browse'} className="flex flex-col min-w-[84px] max-w-[200px] min-h-[84px] max-h-[200px]  items-center group gap-2">
                    <img className="rounded border-2 w-full h-[150px] border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Room 3 </p>
                </Link >

                <Link to={'/browse'} className="flex flex-col min-w-[84px] max-w-[200px] min-h-[84px] max-h-[200px]  items-center group gap-2">
                    <img className="rounded border-2 w-full h-[150px] border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZfhNS88u5ao0M3F5X4HRBGCFsqdb2nncDt32YQHoM-1BeLJq93H30hWyleqclSwt1jNGm6l0tkeefKiiCOLLL5gNjpSjS_Xlaij.png?r=bd7" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Room 4 </p>
                </Link >
                
                <Link to={'/browse'} className="flex flex-col min-w-[84px] max-w-[200px] min-h-[84px] max-h-[200px]  items-center group gap-2">
                    <img className="rounded border-2 w-full h-[150px] border-transparent group-hover:border-2 group-hover:border-gray-300" src="https://occ-0-7292-1432.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTxO1HAzIh18LDAY7Igs6qQ3GhmsclmpCllWnoojeSDD0lMm9hUCp-C4VGo3cT40xfg_7SpIoY6pmRIl-W7B5CN8kvXCBqM7n8_f.png?r=a4b" />
                    <p className="text-gray-500 group-hover:text-gray-300"> Room 5 </p>
                </Link >

                {/* <Link to={'/browse'} className="flex flex-col items-center group gap-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[150px] w-[150px] group-hover:bg-gray-300 border-2 border-transparent" viewBox="0 0 20 20" fill="#6b7280">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                    <p className="text-gray-500 group-hover:text-gray-300"> Add Profile </p>
                </Link > */}

            </div>

            <button className="border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 mb-5 hover:border-gray-400 hover:text-gray-400">
                Profil yönet
            </button>

        </div>
    )
}

export default SelectProfile