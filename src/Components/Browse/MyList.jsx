import React, { useContext } from 'react';
import BrowseHeader from './BrowseHeaderDark';
import BrowseFooter from './BrowseFooter';
import { Data } from '../../Context/DataContext';
import ImgComp from './BrowseMain/Sliders/ImgComp';

function MyList() {
    const data = useContext(Data);

    return (
        <>
            <div className='h-[41px] tabl:h-[68px] '>
                <BrowseHeader />
            </div>
            <main className=' bg-[#141414] px-[4%] '>
                <h1 className='text-white text-[4.5vw] w-full h-[41px] tabl:h-[68px] md:text-[2em] fixed bg-[#141414]  py-2 ' >Listem</h1>
                <ImgComp />
            </main>
            <BrowseFooter />
        </>
    );
}

export default MyList;
