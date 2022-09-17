import React, { useState } from 'react'
import { ICONOS } from '../../constanst/const'

export const Footer = () => {

  return (
    <>
      <footer className='bg-darkslategray h-[20%] px-12 py-8 flex w-full justify-between flex-col'>
        <div className='w-full h-full flex my-2'>
          <div className='bg-dorado w-full h-full p-4 rounded'>
            <div className='flex h-8 mx-4 my-4'>
              { ICONOS.map( ( { url, icono, id } ) => 
                <a key={id} href={url} className='mx-2'><img src={icono} className='h-full w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300' alt={icono} /></a>
              ) }
            </div>
            <div className='flex flex-col	'>
              <span className='text-white py-2 mx-4 font-semibold text-1xl'>Ponte en contacto con nosotros</span>
              <span className='text-white py-2 mx-4 font-semibold text-1xl'>Términos y condiciones | Declaración de Privacidad Extendida</span>
              <span className='text-white py-2 mx-4 font-semibold text-1xl'>Configuración de privacidad</span>
            </div>
          </div>
          <div className='w-full h-full p-4'>
            <h2 className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl'>RECURSOS INMOBILIARIOS</h2>
            <div className='flex flex-col mx-4 px-8'>
              <a href="" className='my-1'>
                <span className='text-white py-2 font-semibold text-1xl'>Sugerencia para comprar una casa</span>
              </a>
              <a href="" className='my-1'>
                <span className='text-white py-2 font-semibold text-1xl'>Sugerencia para vender una casa</span>
              </a>
            </div>
          </div>
          <div className='w-full h-full p-4'>
            <h2 className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl'>SOBRE CASA COLOMBIA</h2>
            <div className='flex flex-col mx-4 px-8'>
              <a href="" className='my-1'>
                <span className='text-white py-2 font-semibold text-1xl'>La Marca Casa Colombia</span>
              </a>
            </div>
          </div>
          <div className='w-full h-full p-4'>
            <h2 className='text-dorado py-2 px-8 mx-4 font-semibold text-1xl'>MAPA DEL SITIO WEB</h2>
            <div className='flex flex-col mx-4 px-8'>
              <a href="" className='my-1'>
                <span className='text-white py-2 font-semibold text-1xl'>Comprar Inmuebles</span>
              </a>
              <a href="" className='my-1'>
                <span className='text-white py-2 font-semibold text-1xl'>Alquilar Inmuebles</span>
              </a>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex'>
          <h2 className='text-white font-semibold text-1xl'>© Derechos de autor | Casa Colombia | 2022</h2>
        </div>
      </footer> 
    </>
  )
}
