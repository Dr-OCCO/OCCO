"use client" 

import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

 const MenuList = [
  {
    name:"Home",
    icon:Home,
    path:"/dashboard"
  },
  {
    name:"History",
    icon:FileClock,
    path:"/dashboard/history"
  },
  {
    name:"Billing",
    icon:WalletCards,
    path:"/dashboard/billing"
  },
  {
    name:"Settings",
    icon:Settings,
    path:"/dashboard/settings"
  },
  
 ]
const path = usePathname();
useEffect(()=>{

},[])


  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        
        <div className='flex justify-center'>
        <img src="https://occo.site/wp-content/uploads/2024/05/OCCO_LOGO-transformed-1-4-300x95.png" alt="LOGO" width={120} height={100}/>
        </div>
        <hr className='my-6 border'/>

        <div className='mt-3'>
          {MenuList.map((menu,index)=>(
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-primary text-white'}`} >
              <menu.icon className='w-6 h-6'/>
                <h2 className='text-lg'>{menu.name}</h2>
            </div>
          )
          )}
        </div>



    </div>
  )
}

export default SideNav
