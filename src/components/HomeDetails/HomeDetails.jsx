import React from 'react'
import inmobiliaria01 from '../../assets/inmobiliaria01.jpg'
import inmobiliaria02 from '../../assets/inmobiliaria02.jpeg'
import './styles.css'

export const HomeDetails = () => {

  return (
    <>
      <section className='w-full h-full flex p-4 my-8'>
        <div className='w-full h-full mx-4 container'>
          <div className="relative max-w-full max-h-full bg-white border border-gray-200 shadow">
            <img className="object-cover h-96 w-full hover:blur-[1px]" src={inmobiliaria01} alt="" />
            <div className='hover:hidden'>
              <div className='transition-300 ease-in-out delay-300 duration-500 hover:scale-110 w-full py-8 bg-zinc-800 opacity-60 centrar absolute top-[50%] left-[50%] text-center'></div>
              <span className='w-full py-4 centrar absolute top-[50%] left-[50%] text-center text-white font-semibold text-3xl'>INMOBILIARIAS</span>
            </div>
          </div>
        </div>
        <div className='w-full h-full mx-4 container'>
          <div className="relative max-w-full max-h-full bg-white border border-gray-200 shadow">
            <img className="object-cover h-96 w-full hover:blur-[1px]" src={inmobiliaria02} alt="" />
            <div className='hover:hidden'>
              <div className='transition-300 ease-in-out delay-300 duration-500 hover:scale-110 w-full py-8 bg-zinc-800 opacity-60 centrar absolute top-[50%] left-[50%] text-center'></div>
              <span className='w-full py-4 centrar absolute top-[50%] left-[50%] text-center text-white font-semibold text-3xl'>INMOBILIARIAS</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
