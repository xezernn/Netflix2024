import React, { useContext } from 'react';
import BrowseHeader from './BrowseHeaderDark';
import BrowseFooter from './BrowseFooter';
import { Data } from '../../Context/DataContext';

function MyList() {
    const data = useContext(Data);

    console.log(data);
    return (
        <>
            <div className='h-[41px] tabl:h-[68px] '>
                <BrowseHeader />
            </div>
            <main className=' bg-[#141414] px-[4%] '>
                <h1 className='text-white text-[4.5vw] w-full h-[41px] tabl:h-[68px] md:text-[2em] fixed bg-[#141414]  py-2 ' >Listem</h1>
                <div className='pt-[100px] flex justify-start flex-wrap gap-[2px] gap-y-[7.5vw] sm:gap-y-[4vw] md:gap-y-[5vw] tabl:gap-y-[4vw] '>
                    {
                        data?.titles?.map((item) => (
                            <div key={item.id} className='w-[49%] sm:w-[32%] md:w-[24%] xlg:w-[19%]  xmd:w-[16%]  ' >
                                <img className='w-full cursor-pointer' src={item?.jawSummary?.backgroundImage?.url}  alt='My list elemetn foto' />
                            </div>
                        ))
                    }
                </div>
            </main>
            <BrowseFooter />
        </>
    );
}

export default MyList;
