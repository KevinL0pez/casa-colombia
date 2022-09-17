import React from 'react'

export const Header = () => {

  return (
    <>
        <header className='bg-darkslategray h-[20%] p-6 flex justify-between w-full items-center'>
            <div className='w-[50%] justify-center text-center text-2xl'>
                <h1 className='text-dorado font-semibold	'>CASA COLOMBIA</h1>
            </div>
            <div className='w-full' >
                <button className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 hover:bg-zinc-700 duration-500'>INICIO</button>
                <button className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 hover:bg-zinc-700 duration-500'>INMUEBLES</button>
                <button className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 hover:bg-zinc-700 duration-500'>QUIÉNES SOMOS</button>
                <button className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-110 hover:bg-zinc-700 duration-500'>CONTACTENOS</button>
            </div>
        </header>
    </>
  )
}
