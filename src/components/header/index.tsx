import Image from 'astro/components/Image.astro'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-primary w-full py-14 border-b-black border-b-8'>
        <div className="w-5/12 bg-white border-black border-2 m-auto h-24 flex">
            <div className="w-6/12 h-full flex gap-5 border-black border-2 items-center justify-start pl-3 hover:bg-gdsc-green transition-all duration-300 cursor-pointer">
                <img className='h-7' src="/icons/vector-1.svg" alt='Ícone' />
                <h1 className='font-medium text-3xl'>gustavodscruz</h1>
            </div>
            <div className="w-3/12 flex border-black border-2 items-center justify-center hover:bg-gdsc-green transition-all duration-300 cursor-pointer">
                <p className='font-medium text-3xl'>About //</p>
            </div>
            <div className="w-3/12 flex border-black border-2 items-center justify-center hover:bg-gdsc-green transition-all duration-300 cursor-pointer">
                <p className='font-medium text-3xl'>Portfolio</p>
            </div>
            <div className="w-3/12 flex border-black border-2 items-center justify-center hover:bg-gdsc-green transition-all duration-300 cursor-pointer">
                <p className='font-medium text-3xl'>Hire Me</p>
            </div>

        </div>
    </div>
  )
}

export default Header