import React from 'react'
//styles
import Styles from './CountryList.module.scss'
//redux
import { connect } from 'react-redux'
//components
import Search from '../Table/TableSearch/TableSearch'
import CountryListItem from '../CountryListItem/CountryListItem'
function CountryList(props) {


    const body = props.Countries.length > 0 ?
        props.searchTxt.length > 0 ?
            props.Countries.filter((country) => country.Country.toLowerCase().includes(props.searchTxt)).map((country, i) => <CountryListItem key={i} data={country}></CountryListItem>) :
            props.Countries.map((country, i) => <CountryListItem key={i} data={country}></CountryListItem>) :
        <div className={Styles.isLoading}>Loading...</div>
    return (
        <div className={Styles.mainContainer}>
            <Search></Search>
            <div className={Styles.listContainer}>

                {body}
            </div>
        </div>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        Countries: covidSummary.Countries,
        searchTxt: covidSummary.searchTxt
    }
}
export default connect(mapStateToProps)(CountryList)

