import React, { useCallback } from 'react'
import Styles from './TableSearch.module.scss'
//redux
import { connect } from 'react-redux'
import { setSearch } from '../../../../Redux/actions/covidSummary'
//logo
import searchLogo from '../../../../Icons/search.png'
function TableSearch(props) {
    const handleChange = useCallback(
        e => {
            props.setSearch(e.target.value.toLowerCase());
        },
        [props],
    )
    return (
        <div className={Styles.mainContainer}>

            <img src={searchLogo} alt='Search icon'></img>
            <input type="text" onChange={handleChange} placeholder="Search"></input>
        </div>

    )
}
const mapDispatchToProps = dispatch => {
    return {
        setSearch: data => { dispatch(setSearch(data)) }
    }
}
export default connect(null, mapDispatchToProps)(TableSearch)
