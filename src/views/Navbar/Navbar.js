import React from 'react'
//styles
import Style from './Navbar.module.scss';
//constants
import { navItems } from '../../utils/constants'
import covidLogo from '../../Icons/virus.svg'
import { ReactComponent as ReactLogo } from '../../Icons/virus.svg';

//pages
import Home from '../home/Home'
//compomnents
import Navitem from '../../components/Navbar/NavItem/Navitem'

function Navbar(props) {

    return (
        <div className={Style.navContainer}>
            <ReactLogo className={Style.mainIcon} ></ReactLogo>
            <div className={Style.navItemsContainer}>
                {
                    Object.values(navItems).map((nav, i) => {
                        return <Navitem key={i} data={nav}></Navitem>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
