import React from 'react'
import inmobiliaria03 from '../../assets/inmobiliaria03.jpg'
import inmobiliaria04 from '../../assets/inmobiliaria04.jpg'
import baño from '../../assets/baño.svg'
import dormitorio from '../../assets/dormitorio.svg'
import expand from '../../assets/expand.svg'
import garaje from '../../assets/garaje.svg'

export const HomeSpecification = () => {
    return (
        <>
            <section className='w-full h-full flex p-4 my-8'>
                <div className='w-full h-full border-2 border-gray-200 shadow p-2 mx-4'>
                    <div className="max-w-full object-cover max-h-full bg-white border border-gray-200 shadow">
                        <img className="object-cover h-80 w-full" src={inmobiliaria03} alt="" />
                        <div className="p-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800">Casa moderna en el norte de Armenia</h5>
                            <div className='flex justify-between'>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex ">Terreno: <span className='font-normal flex items-center'>196,0 m²<img className='w-6 h-6' src={expand}alt="expandir" /></span></p>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex ">Habitaciones: <span className='font-normal flex items-center'>4 <img className='w-6 h-6' src={dormitorio}alt="cama" /></span></p>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex ">Baños: <span className='font-normal flex items-center'>3 <img className='w-6 h-6' src={baño}alt="baño" /></span></p>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex ">Parqueaderos: <span className='font-normal flex items-center'>1 <img className='w-6 h-6' src={garaje}alt="garaje" /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full border-2 border-gray-200 shadow p-2 mx-4'>
                    <div className="max-w-full object-cover max-h-full bg-white border border-gray-200 shadow">
                        <img className="object-cover h-80 w-full" src={inmobiliaria04} alt="" />
                        <div className="p-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800">Casa moderna en el norte de Armenia</h5>
                            <div className='flex justify-between'>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex">Terreno: <span className='font-normal flex items-center'>200,0 m² <img className='w-6 h-6' src={expand}alt="expandir" /></span></p>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex">Habitaciones: <span className='font-normal flex items-center'>3 <img className='w-6 h-6' src={dormitorio}alt="cama" /></span></p>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex">Baños: <span className='font-normal flex items-center'>3 <img className='w-6 h-6' src={baño}alt="baño" /></span></p>
                                <p className="mb-1 font-semibold text-slate-800 text-lg flex">Parqueaderos: <span className='font-normal flex items-center' flex>1 <img className='w-6 h-6' src={garaje}alt="garaje" /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
