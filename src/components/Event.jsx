import React from 'react'

export default function Event({name, sub, link, id}) {
  return (
       <section className='flex-col flex md:flex-col lg:flex lg:flex-row items-center justify-center w-full my-4'>
            <div className={id%2===0?'w-48 flex-[0.2] lg:flex-[0.45] order-1':'w-48 lg:flex-[0.45] order-0'}>
                <img className='w-full' src={link} alt="event" />
            </div>
            <div className={id%2==0?'w-full lg:w-2/5 font-extralight mx-4 text-end':'w-2/5 font-extralight mx-4'}>
                <h3 className='text-4xl'>{name}</h3>
                <p className='text-md mt-8'>{sub}</p>
            </div>
        </section> 
  )
}
