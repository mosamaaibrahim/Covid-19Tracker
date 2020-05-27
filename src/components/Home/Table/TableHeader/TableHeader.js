import React from 'react'
//styles
import Styles from './TableHeader.module.scss'
//constant
import { tableColumns } from '../../../../utils/constants'
//components
import TableCell from '../TableCell/TableCell'
function TableHeader(props) {
    return (
        <div className={Styles.mainContainer}>
            {tableColumns.map((title, i) => <TableCell key={i} customStyle={{ fontSize: 20 }}>{title}</TableCell>)}
        </div>
    )
}
export default TableHeader
