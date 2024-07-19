import React, { useState } from 'react'
import { NavMenu } from './NavMenu'
import '../styles/components/mobileMenu.sass'
import { IoMenu } from 'react-icons/io5'

interface MobileMenuProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    activeScreen,
    handleActiveScreen
}) => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)
    return(
        <>
            <div id='MobileNav'>
                <button id='toggle'
                onClick={() => setOpenMenu(!openMenu)}>
                    <IoMenu style={{strokeWidth: '1px'}} />
                </button>
            </div>

            <div className={openMenu ? 'slideIn open' : 'slideIn'}>
                <NavMenu 
                    activeScreen={activeScreen}
                    handleActiveScreen={handleActiveScreen}
                />
            </div>
        </>
    )
}