import React, { Component } from 'react'
import HeroMainImg from "/src/assets/imgs/hero.svg";

export class Hero extends Component {
  render() {
    return (
        <>
        <div className='h-auto pt-15 px-3 w-full flex flex-col h-auto relative overflow-x-hidden pb-30 lg:flex-row lg:flex-row-reverse max-w-[1108px] mx-auto 2xl:overflow-x-visible xl:px-0 lg:justify-start lg:items-center lg:py-30 xl:pb-50 2xl:max-w-[1280px]'>
            <img src={HeroMainImg} alt="" aria-hidden='true' className='scale-[1.3] sm:scale-[1] relative right-[-60px] lg:right-[-120px] lg:absolute lg:w-[730px] lg:h-[480px]' />
            <div className='mt-20 w-full text-center sm:text-start sm:px-5 lg:px-0 lg:mt-0 lg:static w-full flex-1 flex flex-col lg:max-w-[650px] lg:my-auto lg:mr-auto'>
                <h1 className='text-[42px] font-bold leading-[120%] sm:text-[56px] lg:text-[60px]'>More than just shorter links</h1>
                <p className='my-3 text-[#9E9AA8] sm:text-[22px] xl:max-w-[540px]'>Build your brand’s recognition and get <br className='hidden sm:block xl:hidden'/> detailed insights on how your links are <br className='hidden sm:block xl:hidden'/> performing.</p>
                <a href="#" className='mx-auto sm:mx-0 py-3 my-3 text-white bg-[#2BD0D0] min-h-[40px] min-w-[105px] max-w-[200px] flex items-center justify-center w-full rounded-[50px] hover:bg-[#34b6b6] transition-colors duration-300 font-bold'>Get started</a>
            </div>
        </div>
        </>
    )
  }
}

export default Hero