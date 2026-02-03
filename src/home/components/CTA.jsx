import React, { Component } from 'react'
export class CTA extends Component {
  render() {
    return (
        <>
        <div className="w-full min-h-[250px] h-auto flex items-center justify-center bg-[url('/src/assets/imgs/cta_bg.svg')]">
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-white font-bold text-[28px] lg:text-[40px]'>Boost your links today</h2>
                <a href="#" className='mx-auto sm:mx-0 py-3 my-3 text-white bg-[#2BD0D0] min-h-[40px] min-w-[105px] max-w-[200px] flex items-center justify-center w-full rounded-[50px] hover:bg-[#34b6b6] transition-colors duration-300 font-bold'>Get started</a>
            </div>
        </div>
        </>
    )
  }
}

export default CTA