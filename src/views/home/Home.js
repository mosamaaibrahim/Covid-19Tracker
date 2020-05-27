import React, { useEffect } from 'react'
//style
import Styles from './Home.module.scss'
//redux
import { connect } from 'react-redux'
//getSummary
import { getSummary } from '../../Redux/actions/covidSummary'
//components
import Title from '../../components/Home/Title/Title'
import GlobalCases from '../../components/Home/GlobalCases/GlobalCases'
import Table from '../../components/Home/Table/TableContainer'
import TableSearch from '../../components/Home/Table/TableSearch/TableSearch'
import CountryList from '../../components/Home/CountryList/CountryList'
import CountryInfo from '../../components/Home/CountryInfo/CountryInfo'
function Home(props) {

    useEffect(() => {
        props.getSummary();
    }, [props])
    return (
        <div className={Styles.mainContainer}>
            <GlobalCases></GlobalCases>
            <div className={Styles.dataContainer}>
                <CountryList></CountryList>
                <CountryInfo></CountryInfo>
            </div>
            {/* <Title></Title>
  
            <div className={Styles.titleAndSearch}>
                <h2>Countries</h2>
                <TableSearch></TableSearch>
            </div>
            <Table></Table> */}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getSummary: () => { dispatch(getSummary()) }
    }
}
export default connect(null, mapDispatchToProps)(Home)
