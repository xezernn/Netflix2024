import React, { useContext } from 'react'
import { Data } from '../../Context/DataContext'

function AdaptiveList() {
    const data = useContext(Data)

    return (
        <main className='px-[20px] pt-[60px]'>
            <h1 className='text-[19px] text-[#999] font-bold'>Listem</h1>

            <div className='flex flex-wrap gap-x-[4px] gap-y-[30px] mt-[10px]'>
                {
                    data?.titles?.map((item, i) => (
                        <div className='w-[calc(50%-4px)]'>
                            <img className='w-full' src={item?.jawSummary?.backgroundImage?.url} alt="" />
                        </div>
                    ))
                }

            </div>
        </main>
    )
}

export default AdaptiveList