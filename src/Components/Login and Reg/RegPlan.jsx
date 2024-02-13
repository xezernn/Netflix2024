import React, { useState } from 'react'

function RegPlan() {
    const [click, setClick] = useState(1)

    return (
        <main className='w-full px-[25px] pt-[20px] pb-[60px] tabl:px-[38px] tabl:py-[24px] flex items-center justify-center '>
            <div className='tabl:mt-6'>
                <p className='text-[13px]  '>STEP <strong>1</strong> OF <strong>3</strong> </p>
                <h1 className='text-[32px] mb-[13px] text-[#333]  font-[700] ' >Choose the plan that’s right for you</h1>
                <div className='max-w-[560px] xlg:hidden'>
                    <div className='flex justify-between items-end gap-2 w-full transition1 '>
                        {/* <div className='border border-[#80808066] rounded-[12px] box-border p-3 overflow-hidden min-h-[107px] shadow   '> */}
                        <div onClick={() => { setClick(1) }} className={'w-4/12 border  rounded-[12px] box-border min-h-[131px] shadow overflow-hidden flex flex-col  ' + (click === 1 ? "text-white gradient1" : "")} >
                            <div className={'text-center text-[12px] py-[6px] ' + (click === 1 ? "redBg" : "bg-[#000000b3] text-white ")}>Most Popular</div>
                            <div className='p-3 '>
                                <p className='text-[14px] font-[700] -mb-1'>Premium</p>
                                <sub className='text-[0.625rem] leading-[1]'>4K + HDR</sub>
                            </div>
                        </div>
                        <div onClick={() => { setClick(2) }} className={' w-4/12 border border-[#80808066] rounded-[12px] box-border p-3 overflow-hidden h-[107px] shadow ' + (click === 2 ? "gradient2 text-white" : "")}> {/*gradient2*/}
                            <p className='text-[14px] font-[700] -mb-1'>Standart</p>
                            <sub className='text-[0.625rem] leading-[1]'>1080p</sub>
                        </div>
                        <div onClick={() => { setClick(3) }} className={' w-4/12 border border-[#80808066] rounded-[12px] box-border p-3 overflow-hidden h-[107px] shadow ' + (click === 3 ? "gradient2 text-white" : "")}> {/*gradient2*/}
                            <p className='text-[14px] font-[700] -mb-1'>Basic</p>
                            <sub className='text-[0.625rem] leading-[1]'>720p</sub>
                        </div>
                    </div>

                    <ul className='my-4 '>
                        <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Monthly price
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> EUR{click === 1 ? " 11.99" : click === 2 ? " 9.99" : " 7.99"}</span>
                        </li>

                        <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[hsl(0,0%,46%)] text-[13px] leading-[1.5384] font-[600] '>Video and sound quality
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> {click === 1 ? " Best" : click === 2 ? "Great " : "Good "}</span>
                        </li>
                        <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Resolution
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> {click === 1 ? "4K (Ultra HD) + HDR " : click === 2 ? "1080p (Full HD) " : "720p (HD) "}</span>
                        </li>
                        {click === 1 && <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Spatial audio (immersive sound)
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> Included</span>
                        </li>}
                        <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Supported devices
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> TV, computer, mobile phone, tablet</span>
                        </li>
                        <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Devices your household can watch at the same time
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> {click === 1 ? " 4" : click === 2 ? "2 " : " 1"}</span>
                        </li>
                        <li className='flex justify-between border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Download devices
                            <span className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> {click === 1 ? "6 " : click === 2 ? "2 " : " 1"}</span>
                        </li>
                    </ul>
                    <div className='px-2 text-[#737373] text-[16px]  font-sans '>
                        <small className='leading-[1.2] inline-block'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</small>
                        <small className='mt-2 inline-block leading-[1.2]'>
                            Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
                        </small>
                    </div>
                    <div className='mx-auto max-w-[440px]'>
                        <button className='  min-w-[300px]  md:min-w-[400px] w-full mt-[24px] rounded text-[24px] font-[400] min-h-16 py-[14px] px-[2em] bg-[#e50914] text-white  shadow '>Next</button>

                    </div>
                </div>
                <div className=' w-[1024px] max-w-[1100px] hidden xlg:flex justify-between items-end  '>
                    <div onClick={() => { setClick(1) }} className={'w-[32.5%] rounded-[12px] overflow-hidden  ' + (click === 1 ? "boxsh" : "shadow")}>
                        <div className={'text-center text-[12px] py-[4px] font-[600] ' + (click === 1 ? "redBg text-white " : "bg-[#000000b3] text-white ")}>Most Popular</div>
                        <div>
                            <div className={'m-2 border px-[10px] py-4  rounded-[12px] box-border min-h-[83px] shadow overflow-hidden flex flex-col gradient1  text-white'} >

                                <h3 className='font-[700] text-[18px]  '>Premium</h3>
                                <h3 className='text-[14px]  font-[700] '  >4K + HDR</h3>
                            </div>

                            <ul className='my-4 px-[25px] '>
                                <li className=' border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Monthly price
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> EUR 11.99</p>
                                </li>

                                <li className='border-b border-[#80808066] py-[12.5px] text-[hsl(0,0%,46%)] text-[13px] leading-[1.5384] font-[600] '>Video and sound quality
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> Best</p>
                                </li>
                                <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Resolution
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 4K (Ultra HD) + HDR</p>
                                </li>
                                <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Spatial audio (immersive sound)
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> Included</p>
                                </li>
                                <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Supported devices
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> TV, computer, mobile phone, tablet</p>
                                </li>
                                <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Devices your household can watch at the same time
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 4</p>
                                </li>
                                <li className=' py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Download devices
                                    <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 6</p>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div onClick={() => { setClick(2) }} className={'w-[32.5%] rounded-[12px] overflow-hidden  ' + (click === 2 ? "boxsh" : "shadow")}>

                        <div className={'m-2 border px-[10px] py-4  rounded-[12px] box-border min-h-[83px] shadow overflow-hidden flex flex-col gradient2 text-white '} >

                            <h3 className='font-[700] text-[18px]  '>Standard</h3>
                            <h3 className='text-[14px]  font-[700] '  >1080p</h3>
                        </div>

                        <ul className='my-4 px-[25px] mb-[25%] '>
                            <li className=' border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Monthly price
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> EUR 9.99</p>
                            </li>

                            <li className='border-b border-[#80808066] py-[12.5px] text-[hsl(0,0%,46%)] text-[13px] leading-[1.5384] font-[600] '>Video and sound quality
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> Great</p>
                            </li>
                            <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Resolution
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 1080p (Full HD)</p>
                            </li>

                            <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Supported devices
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> TV, computer, mobile phone, tablet</p>
                            </li>
                            <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Devices your household can watch at the same time
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 2</p>
                            </li>
                            <li className=' py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Download devices
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 2</p>
                            </li>
                        </ul>


                    </div>

                    <div onClick={() => { setClick(3) }} className={'w-[32.5%] rounded-[12px] overflow-hidden  ' + (click === 3 ? "boxsh" : "shadow")}>

                        <div className={'m-2 border px-[10px] py-4  rounded-[12px] box-border min-h-[83px] shadow overflow-hidden flex flex-col gradient2 text-white '} >

                            <h3 className='font-[700] text-[18px]  '>Basic</h3>
                            <h3 className='text-[14px]  font-[700] '  >720p</h3>
                        </div>

                        <ul className='my-4 px-[25px] mb-[25%] '>
                            <li className=' border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Monthly price
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> EUR 7.99</p>
                            </li>

                            <li className='border-b border-[#80808066] py-[12.5px] text-[hsl(0,0%,46%)] text-[13px] leading-[1.5384] font-[600] '>Video and sound quality
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> Good</p>
                            </li>
                            <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Resolution
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 720p (HD)</p>
                            </li>

                            <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Supported devices
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> TV, computer, mobile phone, tablet</p>
                            </li>
                            <li className='border-b border-[#80808066] py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Devices your household can watch at the same time
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 1</p>
                            </li>
                            <li className=' py-[12.5px] text-[#767676] text-[13px] leading-[1.5384] font-[600] '>Download devices
                                <p className=' text-[0.9rem] font-[700] leading-[1.5] text-[#000000b3] '> 1</p>
                            </li>

                        </ul>


                    </div>

                </div>

                <div className='mt-6 px-2 hidden xlg:block max-w-[1024px]'>
                    <p className='text-[#737373] text-[13px]   ' >HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                    <p className='text-[#737373] text-[13px] mt-2  ' >Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
                    </p>
                </div>
                <div className='hidden xlg:block m-auto max-w-[440px] mb-[120px] mt-[10px]  ' >
                    <button className=' min-w-[300px] md:min-w-[400px] w-full mt-[24px] rounded text-[24px] font-[400] min-h-16 py-[14px] px-[2em] bg-[#e50914] text-white  shadow '>Next</button>

                </div>
            </div>

        </main>
    )
}

export default RegPlan