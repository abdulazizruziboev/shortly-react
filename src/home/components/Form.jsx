import React, { Component } from 'react'
export class Form extends Component {
  render() {
    return (
        <>
        <div className="w-full min-h-[250px] h-auto flex items-center justify-center relative top-32 px-5">
            <form className="flex flex-col gap-3 items-center justify-center rounded-[12px] bg-[url('/src/assets/imgs/cta_bg.svg')] w-full max-w-[1108px] 2xl:max-w-[1280px] px-5 py-8 sm:flex-row sm:px-12 sm:py-15">
                <input type="text" placeholder='Shorten a link here...' className='rounded-[16px] min-h-[64px] px-5 bg-white w-full' />
                <button type='button' href="#" className='mx-auto sm:mx-0 py-3 text-white bg-[#2BD0D0] min-h-[64px] min-w-[105px] flex items-center justify-center w-full rounded-[16px] hover:bg-[#34b6b6] transition-colors duration-300 font-bold cursor-pointer w-full sm:max-w-[200px]'>Shorten It!</button>
            </form>
        </div>
        </>
    )
  }
}

export default Form