import React, { Component } from 'react'
import Logo from "/shortly_light.svg"

export class Header extends Component {
  render() {
    return (
      <>
      <div className="w-full px-4 py-6 flex justify-center items-center">
        <div className="max-w-[1108px] w-full flex justify-between items-center 2xl:max-w-[1280px]">
            <a href="/">
            <img src={Logo} alt="Shortly logo" className="max-w-[120px] min-h-[32px] w-full"/>
            </a>
            <label className="text-[24px] cursor-pointer flex md:hidden" htmlFor='navbarToggler'>
              <span className="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="navbarToggler" className='peer hidden'/>
            <div className="js-header-navbar fixed inset-0 bg-[#eee] z-[999] hidden flex-col justify-between px-4 py-5 text-[#9E9AA8] md:bg-transparent md:flex md:flex-row md:w-full md:relative peer-checked:flex">
          <div className='flex justify-between items-center w-full md:hidden'>
            <span className="text-[22px]">Menu</span>
            <label htmlFor='navbarToggler' className="cursor-pointer flex text-[20px] hover:text-black transition-colors duration-300">
              <span className="fa fa-xmark pointer-events-none"></span>
            </label>
          </div>
          <nav className="flex flex-col items-center gap-3 font-[600] md:flex-row md:gap-6 md:ml-5">
            <a href="#" className="hover:text-black transition-colors duration-300">Features</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-black transition-colors duration-300">Resources</a>
          </nav>
          <div className="flex flex-col items-center gap-3 font-[600] md:flex-row">
            <a href="#" className="hover:text-black transition-colors duration-300">Login</a>
            <a href="#" className="text-white bg-[#2BD0D0] min-h-[40px] min-w-[105px] flex items-center justify-center w-full rounded-[50px] hover:bg-[#34b6b6] transition-colors duration-300">Sign Up</a>
          </div>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default Header