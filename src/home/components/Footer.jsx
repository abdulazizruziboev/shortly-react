import React, { Component } from 'react'
import Logo from "/shortly_dark.svg"

export class Footer extends Component {
  render() {
    return (
      <>
      <div className='flex items-center justify-center bg-[#232127] py-15 px-5 md:px-15'>
        <div className='w-full max-w-[1108px] flex flex-col items-center gap-y-12 h-full md:flex-row md:items-start md:justify-between 2xl:max-w-[1280px]'>
        <a href="#">
          <img src={Logo} alt="Shortly logo" className="max-w-[120px] min-h-[32px] w-full"/>
        </a>

        <div className='flex flex-col gap-y-10 sm:flex-row sm:flex-wrap sm:gap-x-8 md:gap-x-12 xl:gap-x-25'>
          <div className='flex flex-col gap-y-6 text-white items-center sm:items-start'>
          <span className='font-bold'>Features</span>
          <ul className='flex flex-col gap-y-3  items-center sm:items-start text-[#BFBFBF]'>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Link Shortening</a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Branded Links</a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Analytics</a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-y-6 text-white items-center sm:items-start'>
          <span className='font-bold'>Resources</span>
          <ul className='flex flex-col gap-y-3  items-center sm:items-start text-[#BFBFBF]'>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Blog</a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Developers</a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Support</a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-y-6 text-white items-center'>
          <span className='font-bold'>Company</span>
          <ul className='flex flex-col gap-y-3  items-center sm:items-start text-[#BFBFBF]'>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>About</a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Our Team</a>
            </li>
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Careers</a>
            </li>   
            <li>
              <a href="#" className='hover:text-white transition-colors duration-300'>Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='flex gap-x-6 items-center sm:flex-col sm:gap-y-6 sm:justify-center sm:h-full md:flex-row md:items-start md:mt-2'>
            <li>
              <a href="#" className='transition-opacity duration-300 hover:opacity-[0.75]'>
                <img src="/src/assets/imgs/social/facebook.svg" alt="" aria-hidden="true"/>
              </a>
            </li>
            <li>
              <a href="#" className='transition-opacity duration-300 hover:opacity-[0.75]'>
                <img src="/src/assets/imgs/social/twitter.svg" alt="" aria-hidden="true"/>
              </a>
            </li>
            <li>
              <a href="#" className='transition-opacity duration-300 hover:opacity-[0.75]'>
                <img src="/src/assets/imgs/social/pinterest.svg" alt="" aria-hidden="true"/>
              </a>
            </li>
            <li>
              <a href="#" className='transition-opacity duration-300 hover:opacity-[0.75]'>
                <img src="/src/assets/imgs/social/instagram.svg" alt="" aria-hidden="true"/>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default Footer