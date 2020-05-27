import React from 'react'
//styles
import Styles from './Cases.module.scss'
function Cases(props) {
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
        <div className={Styles.mainContainer}>
            <div className={Styles.partContainer}>
                <div className={Styles.title}>{props.title}</div>
            </div>
            <div className={Styles.partContainer}>
                <div className={Styles[props.color]}> {props.total !== undefined ? addCommas(props.total) : 'Loading...'}</div>
            </div>
        </div>
    )
}

export default Cases
