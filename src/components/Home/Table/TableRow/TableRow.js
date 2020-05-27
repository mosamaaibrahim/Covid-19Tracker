import React from 'react'
//styles
import Styles from './TableRow.module.scss'
//constants
import { getFlag } from '../../../../utils/constants'
//components
import TableCell from '../TableCell/TableCell'
function TableRow(props) {
    return (
        <div className={Styles.mainContainer}>
            <TableCell ><img style={{ width: 20, marginRight: 10 }} src={getFlag(props.data.CountryCode)} alt="Flag"></img>{props.data.Country}</TableCell>
            <TableCell customStyle={{ color: 'red' }}>{props.data.TotalConfirmed}</TableCell>
            <TableCell customStyle={{ color: 'green' }}>{props.data.TotalRecovered}</TableCell>
            <TableCell customStyle={{ color: 'gray', justifyContent: 'space-between' }}>{props.data.TotalDeaths}
                <div style={{ color: 'black', marginRight: 5, cursor: 'pointer' }}>View more</div></TableCell>
        </div>
    )
}

export default TableRow
