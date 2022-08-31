import React from 'react'
import Event from './Event'
import event from './event.json'

export default function Events() {
  return (
    <section className='text-barlow bg-primary'>
        <div className='py-8'>
            <h2 className='text-center text-4xl font-bold text-secondary'>Events</h2>
            <div className='w-full mt-4 lg:mt-16 grid grid-cols-1 place-content-center text-white place-items-center'>
                {
                    event && event.map((e, i)=>{
                        return <Event name={e.name} id={e.id} sub={e.description} link={e.src}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}
