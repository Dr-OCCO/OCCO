import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import { Link } from 'lucide-react'
import Image from 'next/image'

function TemplateCard(item:TEMPLATE) {
  return (
    <a href={'/dashboard/content/'+item?.slug}>
  
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
      <Image src={item.icon} alt="icon" width={50} height={50}/>
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.desc}</p>

    </div>
  
  </a>
    
  

  )
}

export default TemplateCard
