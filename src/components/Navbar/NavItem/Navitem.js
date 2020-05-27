import React from 'react'
//styles
import Style from './Navitem.module.scss'
//routing
import { NavLink } from 'react-router-dom'
//Logos
import { ReactComponent as HomeLogo } from '../../../Icons/home.svg';
import { ReactComponent as SympLogo } from '../../../Icons/symp.svg';
import { ReactComponent as TestLogo } from '../../../Icons/test.svg';
import { navItems } from '../../../utils/constants'
function Navitem(props) {
    const renderLogo = React.useCallback(() => {
        switch (props.data.id) {
            case navItems.home.id: return <HomeLogo className={Style.icon}></HomeLogo>
            case navItems.symptoms.id: return <SympLogo className={Style.icon}></SympLogo>
            case navItems.journal.id: return <TestLogo className={Style.icon}></TestLogo>
            default: return null
        }
    })
    return (
        <NavLink exact to={props.data.route} className={Style.mainContainer} activeClassName={Style.mainContainerActive}>

            <div className={Style.mainContent}>
                {renderLogo()}
                <div className={Style.title}>{props.data.title}</div>
            </div>


        </NavLink>
    )
}

export default Navitem
