import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext);
    

    
    return (
        <div className=''>
            <Navbar activeMenu={activeMenu}/>



            {user && (
                <div className='flex min-h-screen'>
                    <div className='max-[1080px]:hidden'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>

                    <div className='grow mx-5 overflow-y-auto'>{children}</div>
                </div>
            )}
            

        </div>
    )
}

export default DashboardLayout