import React from 'react'
//styles
import Styles from './TableCell.module.scss'
function TableCell(props) {
    return (
        <div className={Styles.mainContainer} style={props.customStyle}>
            {props.children}
        </div>
    )
}

export default TableCell
