import React, { useState, useEffect, useCallback } from 'react'
//styles
import Styles from './Dashboard.module.scss'
//components
import Line from './Charts/Line'
import Bar from './Charts/Bar'
import Dount from './Charts/Donut'
//moment
import moment from 'moment'
//constants
import { chartTypes } from '../../../utils/constants'
//redux
import { connect } from 'react-redux'
function Dashboard(props) {




    const renderChartType = () => {
        switch (props.chartType) {
            case chartTypes.line.id: return <Line />
            case chartTypes.bar.id: return <Bar />
            case chartTypes.donut.id: return <Dount />
            case chartTypes.all.id: return <>
                <Line />
                <Bar />
                <Dount />
            </>
            default: return <Line

            />
        }
    }
    return (
        <div className={Styles.mainContainer}>
            {renderChartType()}
        </div>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        countryDetails: covidSummary.countryDetails,
        Countries: covidSummary.Countries
    }
}

export default connect(mapStateToProps)(Dashboard)
