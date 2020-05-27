import React from 'react'
//styles
import Styles from './GlobalCases.module.scss'
//components
import Cases from '../Cases/Cases'
//redux
import { connect } from 'react-redux'
function GlobalCases(props) {


    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.titleContainer}>
                <div className={Styles.title}>Global Cases</div>
            </div>
            <Cases title={'Active Confirmed'} no={props.Global.NewConfirmed} total={props.Global.TotalConfirmed} color="infoOrange"></Cases>
            <Cases title={'Recovered'} no={props.Global.NewRecovered} total={props.Global.TotalRecovered} color="infoGreen"></Cases>
            <Cases title={"Death's"} no={props.Global.NewDeaths} total={props.Global.TotalDeaths} color="infoMov"></Cases>
        </div>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        Global: covidSummary.Global
    }
}
export default connect(mapStateToProps)(GlobalCases)
