import React, { Component } from 'react'
import CardFirst from "../../assets/imgs/card_first.svg";
import CardSecond from "../../assets/imgs/card_second.svg";
import CardThird from "../../assets/imgs/card_third.svg";

export class About extends Component {
  render() {
    return (
        <>
        <div className='bg-[#eff1f7] pt-[300px] pb-15 px-10 mx-auto'>
            <div className='text-center flex flex-col gap-y-3 max-w-[1108px] mx-auto 2xl:max-w-[1280px]'>
                <h2 className='font-bold text-[28px] leading-[120%] lg:text-[40px]'>Advanced Statistics</h2>
                <p className='text-[#9E9AA8] lg:text-[18px] lg:max-w-[540px] mx-auto'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='flex flex-col gap-y-30 relative items-center py-20 lg:flex-row lg:gap-x-10 max-w-[1108px] 2xl:max-w-[1280px] mx-auto'>
                <span className='absolute w-[6px] h-[75%] bg-[#2BD0D0] z-[1] lg:h-[6px] lg:w-[75%]'></span>
                <div className='flex flex-col items-center bg-white min-h-[265px] w-full px-4 rounded-[5px] px-8 z-[2] lg:items-start'>
                    <img src={CardFirst} alt="" aria-hidden="true" className='relative top-[-40px]'/>
                    <div className='text-center relative top-[-12px] lg:text-start'>
                        <h3 className='text-[22px] font-bold'>Brand Recognition</h3>
                        <p className='text-[#9E9AA8]'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-white min-h-[265px] w-full px-4 rounded-[5px] px-8 z-[2] lg:items-start lg:mt-[75px]'>
                    <img src={CardSecond} alt="" aria-hidden="true" className='relative top-[-40px]'/>
                    <div className='text-center relative top-[-12px] lg:text-start'>
                        <h3 className='text-[22px] font-bold'>Detailed Records</h3>
                        <p className='text-[#9E9AA8]'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-white min-h-[265px] w-full px-4 rounded-[5px] px-8 z-[2] lg:items-start lg:mt-[150px]'>
                    <img src={CardThird} alt="" aria-hidden="true" className='relative top-[-40px]'/>
                    <div className='text-center relative top-[-12px] lg:text-start'>
                        <h3 className='text-[22px] font-bold'>Fully Customizable</h3>
                        <p className='text-[#9E9AA8]'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
}

export default About