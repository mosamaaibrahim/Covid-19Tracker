import React from 'react'
//style
import Styles from './Title.module.scss'
function Title() {
    return (
        <div className={Styles.mainContainer}>
            <img className={Styles.logo} src={'imgs/coronavirus.png'} alt="Logo"></img>
            <h2>Covid-19 Tracker</h2>
        </div>
    )
}

export default Title
