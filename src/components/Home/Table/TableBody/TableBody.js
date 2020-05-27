import React from 'react'
//styles
import Styles from './TableBody.module.scss';
//redux 
import { connect } from 'react-redux'
//components
import TableRow from '../TableRow/TableRow'
function TableBody(props) {

    const body = props.Countries.length > 0 ?
        props.searchTxt.length > 0 ?
            props.Countries.filter((country) => country.Country.includes(props.searchTxt)).map((country, i) => <TableRow key={i} data={country}></TableRow>) :
            props.Countries.map((country, i) => <TableRow key={i} data={country}></TableRow>) :
        <div className={Styles.isLoading}>Loading...</div>
    return (
        <div className={Styles.mainContainer}>
            {body}
        </div>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        Countries: covidSummary.Countries,
        searchTxt: covidSummary.searchTxt
    }
}
export default connect(mapStateToProps)(TableBody)
