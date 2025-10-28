import React from 'react'
import Link from 'next/link'
import './sidebar.css'

import sidebarOptions from '@/data/dashboard/admin/sidebarOptions'

const sidebar = () => {
  return (
    <div className="SidebarComponent">
        <div className="SidebarComponent-in">
            <div className="sidebar-one">
                {sidebarOptions.map((option) => (
                    <div className='sidebar-option' key={option.name}>
                        <Link href={option.link}>
                            <option.icon className="sidebar-icon" />
                            {option.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default sidebar