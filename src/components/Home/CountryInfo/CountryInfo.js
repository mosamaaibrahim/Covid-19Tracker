import React, { useState } from 'react'
//redux
import { connect } from 'react-redux'
//styles
import Styles from './CountryInfo.module.scss'
//constants
import { getFlag, chartTypes } from '../../../utils/constants'
//components
import Cases from '../Cases/Cases'
import Dashboard from '../Dashboard/Dashboard'
function CountryInfo(props) {
    const [selectdCountry, setSelectedCountry] = useState(null);
    const [chartType, setChartType] = useState('line');
    React.useEffect(() => {
        if (props.selectedCountry !== null) {
            setSelectedCountry(props.Countries.find(cntry => {
                return cntry.CountryCode === props.selectedCountry
            }))
        }
    }, [props.selectedCountry])


    return (
        <div className={Styles.mainContainer}>
            {
                selectdCountry !== null ?
                    <>
                        <div className={Styles.headerContainer}>
                            <img src={getFlag(selectdCountry.CountryCode)} className={Styles.flag} alt="Flag"></img>
                            <div className={Styles.countryTitle}>
                                {
                                    selectdCountry.Country
                                }
                            </div>

                        </div>
                        <div className={Styles.casesContainer}>
                            <Cases title={'Active Confirmed'} no={selectdCountry.NewConfirmed} total={selectdCountry.TotalConfirmed} color="infoOrange"></Cases>
                            <Cases title={'Recovered'} no={selectdCountry.NewRecovered} total={selectdCountry.TotalRecovered} color="infoGreen"></Cases>
                            <Cases title={"Death's"} no={selectdCountry.NewDeaths} total={selectdCountry.TotalDeaths} color="infoMov"></Cases>
                            <div className={Styles.dropdownContainer}>
                                <div className={Styles.dropdownTitle}>Chart type </div>
                                <select className={Styles.dropdown} name="charts" id="charts" onChange={(e) => setChartType(e.target.value)}>
                                    {
                                        Object.values(chartTypes).map((char, i) => {
                                            return <option key={i} value={char.id}>{char.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={Styles.dashboardContainer}>
                            <Dashboard chartType={chartType}></Dashboard>
                        </div>
                    </>
                    :
                    <div>Please Select Country</div>
            }
        </div>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        Countries: covidSummary.Countries,
        selectedCountry: covidSummary.selectedCountry
    }
}
export default connect(mapStateToProps)(CountryInfo)

