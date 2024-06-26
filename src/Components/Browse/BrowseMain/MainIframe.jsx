import React, { useEffect, useState } from 'react';
import bgVideo from "../../../assets/img/mainBgVideo.mp4";
import Adam from "../../../assets/img/jumaniAdam.webp";
import JumaniLogo from "../../../assets/img/fubar.webp";
import { Link } from 'react-router-dom';

function MainIframe() {
  const [showImage, setShowImage] = useState(false) // false 
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setShowVideo(false);
      setShowImage(true);
    }, 15000);

    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 15000);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (


    <div className='relative z-10  xsm:min-h-[200px] xxm:min-h-[250px]  md:min-h-[500px] '>
      <div className={"relative w-full max-h-[100vh]  " + (showVideo ? '' : 'hidden')}>
        <video className='w-full xsm:min-h-[250px] max-h-[100vh] object-cover' autoPlay muted loop>
          <source className='' src={bgVideo} type="video/mp4" />
        </video>
        <div className='absolute z-[9] text-white top-[38%] left-[4%] w-[36%]'>
          <div className='w-[56%] mb-[.5rem] '>
            <img className='w-full max-h-[13.2vw] ' src={JumaniLogo} alt="" />
          </div>

          <div className='mt-[1.5vw] flex gap-4 items-center '>
            <Link to={"/browse/watch"} className='text-black flex items-center gap-3 py-[.3rem] px-[1rem] md:py-[.8rem] md:px-[1.5rem] cursor-pointer bg-white rounded '>
              <svg className='w-4 h-4 md:w-6 md:h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
              <span className='text-[10px] sm:text-[.8rem] md:text-[1.1rem] leading-[1.6rem] font-bold '>Oynat</span>
            </Link>


            <button className='flex items-center gap-3 py-[.3rem] px-[1rem] md:py-[.8rem] md:px-[1.5rem] cursor-pointer whitespace-nowrap bg-[#6d6d6db3] rounded '>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="CircleI" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
              <span className='text-[10px] sm:text-[.8rem] md:text-[1.1rem] leading-[1.6rem] font-bold '>Daha Fazla Bilgi</span>
            </button>
          </div>

        </div>

      </div>

      <div className={"relative w-full max-h-[100vh] " + (showImage ? '' : 'hidden')}>

        <img className='w-full max-h-[105vh]' src={Adam} alt="" />
        <div className='absolute z-[45] text-white top-[23%] left-[4%] w-[36%]'>
          <img className='w-full  max-h-[11vw] mb-[1vw]' src={JumaniLogo} alt="" />
          {/* <h1 className='text-[1.8vw] my-[1vw] shadow-black font-[600]   '>2. Sezonu Şimdi İzleyin</h1> */}
          <p className='text-[1.3vw]'>
            Dört yakın arkadaş olan Pedro, Luis, Raúl ve Santi, değişen dünyanın güçlü kadınları karşısında şaşkına döner ve bu gerçekliğe kendilerince uyum sağlamaya çalışır.
          </p>

          <Link to={"/browse/watch"} className='mt-[1.5vw] flex gap-4 items-center '>
            <button className='text-black flex items-center gap-3 py-[.3rem] px-[1rem] md:py-[.8rem] md:px-[1.5rem] cursor-pointer bg-white rounded '>
              <svg className='w-4 h-4 md:w-6 md:h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
              <span className='text-[10px] sm:text-[.8rem] md:text-[1.1rem] leading-[1.6rem] font-bold '>Oynat</span>
            </button>


            <button className='flex items-center gap-3 py-[.3rem] px-[1rem] md:py-[.8rem] md:px-[1.5rem] cursor-pointer whitespace-nowrap bg-[#6d6d6db3] rounded '>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="CircleI" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
              <span className='text-[10px] sm:text-[.8rem] md:text-[1.1rem] leading-[1.6rem] font-bold '>Daha Fazla Bilgi</span>
            </button>
          </Link>

        </div>


      </div>
    </div>
  );
}

export default MainIframe;
