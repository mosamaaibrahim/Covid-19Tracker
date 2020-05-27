import React, { useEffect } from 'react'
//Material ui
import MaterialTable from 'material-table'
//redux
import { connect } from 'react-redux'
import { getFlag } from '../../../utils/constants'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
function Tablee(props) {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Country', field: 'Country' },
            { title: 'Total Confirmed', field: 'TotalConfirmed' },
            { title: 'Total Deaths', field: 'TotalDeaths' },
            { title: 'Total Recovered', field: 'TotalRecovered' },


        ],
        data: [

        ],
    });

    useEffect(() => {

        setState(prevState => {
            return {
                ...prevState,
                data: props.Countries.map((count) => {
                    return {
                        Country: count.Country,
                        TotalConfirmed: count.TotalConfirmed,
                        TotalDeaths: count.TotalDeaths,
                        TotalRecovered: count.TotalRecovered,
                        CountryCode: count.CountryCode
                    }
                })
            }
        })
    }, [props.Countries])
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Country</StyledTableCell>
                        <StyledTableCell >Total Confirmed</StyledTableCell>
                        <StyledTableCell >Total Recovered</StyledTableCell>
                        <StyledTableCell >Total Deaths</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.data.map((row) => (
                        <StyledTableRow key={row.Country}>
                            <StyledTableCell >{<>
                                <img src={getFlag(row.CountryCode)} style={{ width: '20px', height: '20px', 'marginRight': '5px' }}></img>
                                {row.Country}
                            </>}</StyledTableCell>
                            <StyledTableCell >{row.TotalConfirmed}</StyledTableCell>
                            <StyledTableCell >{row.TotalRecovered}</StyledTableCell>
                            <StyledTableCell >{row.TotalDeaths}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
const mapStateToProps = ({ covidSummary }) => {
    return {
        Countries: covidSummary.Countries
    }
}

export default connect(mapStateToProps)(Tablee)
