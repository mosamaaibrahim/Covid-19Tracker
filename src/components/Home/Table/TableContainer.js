import React from 'react'
//styles
import Styles from './TableContainer.module.scss'
//components
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
function TableContainer() {

    return (
        <div className={Styles.mainContainer}>
            <TableHeader></TableHeader>
            <TableBody></TableBody>
        </div>
    )
}

export default TableContainer
