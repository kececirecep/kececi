import React from 'react'
import { NavLink } from 'react-router-dom'

const CardComponent = (props) => {
     

    return (
        <div className='overflow-hidden bg-white/5 rounded-md border-2 border-transparent hover:bg-slate-800 hover:-translate-y-5 duration-300 hover:shadow-gray-400 hover:border-blue-600'>
            <NavLink to={props.link} target='_blank'>
                <img src={props.image} alt="" className='w-full h-[230px] object-cover mb-4 ' /> 
                <h3 className='text-base line-clamp-1 lg:text-xl mb-4 text-center'>{props.h3}</h3>
            </NavLink>
            <div className='flex justify-center items-center gap-4 pb-8'>
            {
                props.tags.map((item,index)=>{
                    return(
                        <span key={index} className='bg-gray-700 px-4 py-1 rounded-lg'>{item}</span>
                    )
                })
            } 
            </div>
        </div>
    )
}

export default CardComponent