import React from 'react'
//styles
import Styles from './CountryListitem.module.scss'
//constants
import { getFlag } from '../../../utils/constants'
//redux
import { connect } from 'react-redux'
import { setSelectedCountry, getDetails } from '../../../Redux/actions/covidSummary'
function CountryListItem(props) {
    function addCommas(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
    return (
        <div className={props.selectedCountry === props.data.CountryCode ? Styles.mainContainerActive : Styles.mainContainer} onClick={() => {
            props.setSelectedCountry(props.data.CountryCode)
            props.getDetails(props.data.CountryCode)
        }}>
            <div className={Styles.infoContainer}>

                <img src={getFlag(props.data.CountryCode)} className={Styles.flag} alt="Flag"></img>

                <div className={Styles.title}>
                    {props.data.Country}
                </div>
            </div>
            <div className={Styles.count}>
                {addCommas(props.data.TotalConfirmed)}
            </div>
        </div>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {

        selectedCountry: covidSummary.selectedCountry
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setSelectedCountry: (id) => { dispatch(setSelectedCountry(id)) },
        getDetails: code => { dispatch(getDetails(code)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryListItem)

