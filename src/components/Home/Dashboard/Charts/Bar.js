import React, { useState, useEffect, useCallback } from 'react'

//chart js
import { Bar as BarChart } from 'react-chartjs-2';
//moment
import moment from 'moment'
//redux
import { connect } from 'react-redux'
function Bar(props) {

    const [lineData, setLineData] = useState({});
    useEffect(() => {
        if (props.countryDetails.length > 0) {
            const confirmedData = [];
            const recoveredData = [];
            const deathData = []
            const formatedLabels = [];
            props.countryDetails.forEach(obj => {
                formatedLabels.push(moment(obj.Date).format('YYYY-MM-DD'));
                confirmedData.push(obj.Confirmed);
                recoveredData.push(obj.Recovered);
                deathData.push(obj.Deaths);
            })
            setLineData({
                labels: formatedLabels,
                datasets: [{
                    label: 'Total infections',
                    data: confirmedData,
                    backgroundColor: [
                        'rgb(250, 100, 0)'
                    ],
                    borderColor: [
                        'rgb(250, 100, 0)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Total Recovered',
                    data: recoveredData,
                    backgroundColor: [
                        'rgb(28, 177, 66)'
                    ],
                    borderColor: [
                        'rgb(28, 177, 66)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Total Death's",
                    data: deathData,
                    backgroundColor: [
                        'rgb(98, 54, 255)'
                    ],
                    borderColor: [
                        'rgb(98, 54, 255)'
                    ],
                    borderWidth: 2
                },
                ]
            })

        }
        return () => {
            setLineData({})
        }
    }, [JSON.stringify(props.countryDetails)])




    return (
        <BarChart
            data={lineData}
            options={{ maintainAspectRatio: false }}
        />
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        countryDetails: covidSummary.countryDetails,
        Countries: covidSummary.Countries
    }
}

export default connect(mapStateToProps)(Bar)
