import React, { useState, useEffect, useCallback } from 'react'

//chart js
import { Doughnut } from 'react-chartjs-2';
//moment
import moment from 'moment'
//redux
import { connect } from 'react-redux'
function Donut(props) {

    const [lineData, setLineData] = useState({});
    useEffect(() => {
        if (props.selectedCountry.length !== null) {
            const countryData = props.Countries.find(cntry => {
                return cntry.CountryCode === props.selectedCountry
            })
            setLineData({
                labels: ['Infected', 'Recovered', "Death's"],
                datasets: [{
                    label: 'Total infections',
                    data: [countryData.TotalConfirmed, countryData.TotalRecovered, countryData.TotalDeaths],
                    backgroundColor: [
                        'rgb(250, 100, 0,0.3)',
                        'rgb(28, 177, 66,0.3)',
                        'rgb(98, 54, 255,0.3)'
                    ],
                    borderColor: [
                        'rgb(250, 100, 0)',
                        'rgb(28, 177, 66)',
                        'rgb(98, 54, 255)'
                    ],
                    borderWidth: 1
                },

                ]
            })
        }
        return () => {
            setLineData({})
        }
    }, [JSON.stringify(props.selectedCountry)])




    return (
        <Doughnut
            data={lineData}
            options={{ maintainAspectRatio: false }}
        />
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        selectedCountry: covidSummary.selectedCountry,
        Countries: covidSummary.Countries
    }
}

export default connect(mapStateToProps)(Donut)
