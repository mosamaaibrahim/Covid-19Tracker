import React from 'react'
//style
import Style from './Appbody.module.scss';
import { Route, Switch } from 'react-router-dom'
//pages
import Home from '../home/Home'
function Appbody() {
    return (
        <div className={Style.mainContainer}>
            <div className={Style.titleContainer}>
                <div className={Style.mainTitle}>Covid-19 Tracker</div>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </div>
    )
}

export default Appbody
