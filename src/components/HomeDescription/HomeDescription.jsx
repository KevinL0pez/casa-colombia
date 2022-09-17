import React from 'react'
import inmobiliaria06 from '../../assets/inmobiliaria06.jpg'

export const HomeDescription = () => {



  return (
    <>
        <section className='w-full h-full flex p-8 mt-8'>
            <div className='w-full h-full'>
                <img className='object-cover h-full w-full rounded-md' src={inmobiliaria06} alt="inmobiliaria06" />
            </div>
            <div className='w-full h-full px-8'>
                <h3 className='text-center text-slate-800 py-2 mx-4 text-2xl'>BIENVENIDO</h3>
                <h2 className='text-center text-slate-800 py-2 mx-4 font-medium text-3xl'>GRAN VARIEDAD DE INMOBILIARIOS (CAMPESTRES - MODERNOS)</h2>
                <span className='text-slate-800 py-2 font-normal text-1xl'>
                    Generando una maravillosa rentabilidad,
                    ubicado en una zona residencial muy tranquila.
                    En la parte alta de Los Cristales.
                    La mayoría gozan de buena vista o patios interiores que hacen de estos los más agradables ambientes
                    Entre ellos encontramos aptos grandes de varios tamaños
                    De 3 alcobas, de 2 alcobas y apartaestudios.
                    Todos modernos y con buenos espacios y comodas distribuciones.
                    Incluso muchos de ellos se rentan amoblados haciendo que el ingreso mensual sea mucho más llamativo
                    El edificio es el ideal para inversionistas.
                    A continuación dejo un cuadro con los promedios de las Rentas que arroja por cada uno, describiendo medidas y número de baños de cada uno.
                    El edificio cuenta con Zona de lavandería la cual aparte de facilitar el servicio a los residentes, deja una ganancia a los propietarios también.
                    Es una edificio inteligente muy bien diseñado que brinda comodidad y tranquilidad a sus residentes.
                    Es la mejor opción cuando de inversión se trata.
                </span>
            </div>
        </section>
    </>
  )
}
