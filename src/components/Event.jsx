import React from 'react'

export default function Event({name, sub, link, id}) {
  return (
       <section className='flex-col flex md:flex-col lg:flex lg:flex-row items-center justify-center w-full my-12 lg:my-4 px-12 lg:px-0'>
            <div className={id%2===0?'lg:w-48 lg:h-56 flex-[0.2] lg:flex-[0.45] lg:order-1':'lg:w-48 lg:h-56 lg:flex-[0.45] order-0 lg:order-0'}>
                <img className='w-full object-cover rounded-lg h-full' src={link} alt="event" />
            </div>
            <div className={id%2==0?'w-full lg:w-2/5 font-extralight mx-4 text-end':'w-full lg:w-2/5 font-extralight mx-4'}>
                <h3 className='text-4xl'>{name}</h3>
                <p className='text-md mt-8'>{sub}</p>
            </div>
        </section> 
  )
}
