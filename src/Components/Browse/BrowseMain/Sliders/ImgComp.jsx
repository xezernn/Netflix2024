import React, { useContext } from 'react'
import { Data } from '../../../../Context/DataContext'
import { Link } from 'react-router-dom'

function ImgComp() {
    const data = useContext(Data)
    return (
        <div className='pt-[100px] flex justify-start flex-wrap gap-[2px] tabl:gap-[6px] gap-y-[7.5vw] sm:gap-y-[4vw] md:gap-y-[5vw] tabl:gap-y-[4vw] '>
            {
                data?.titles?.slice(0,48).map((item) => (
                    <Link to="/browse/watch" key={item.id} className='block w-[49%] rounded-[3px] overflow-hidden sm:w-[32%] md:w-[24%] xlg:w-[19%]  xmd:w-[16%]  ' >
                        <img className='w-full cursor-pointer' src={item?.jawSummary?.backgroundImage?.url} alt='My list elemetn foto' />
                    </Link>
                ))
            }

        </div>
    )
}

export default ImgComp