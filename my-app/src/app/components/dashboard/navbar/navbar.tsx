import React from 'react'
import Image from 'next/image'

import './navbar.css'

const navbar = () => {
  return (
    <div className="DashboardNavComponent">
        <div className="DashboardNavComponent-in">
            <div className="dn-one">
                <Image  
                    src="/Logo.png"
                    alt="AxisBill Logo"
                    width={90}
                    height={50}
                />
            </div>
            <div className="dn-two">
                <h1>Welcome to AxisBill Admin Dashboard</h1>
            </div>
            <div className="dn-three">
               <p>Sai Tadikonda</p>
            </div>
        </div>
    </div>
  )
}

export default navbar