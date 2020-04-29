import React, {useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import { AdminContext } from '../components/Context/AdminContext';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


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
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

/*function createTestData(name, trips) {
  return { name, trips };
}

const rows = [
  createTestData('Kertész Géza', 4),
  createTestData('Berényi Miklós', 5),
  createTestData('Bartha Zsolt', 6),
];*/

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
    marginTop: "50px",
    margin: "auto",
    maxWidth: "50%",
    minWidth: "300",
    textAlign: "center"
  },
  content: {
    display: "inline-block"
  }
});



export default function Admin() {
  const classes = useStyles();
  const{ allUsers, deleteUser } = useContext(AdminContext);

  return allUsers === undefined ? (<h2>Loading...</h2>): (
    <Card className={classes.root}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map(user => (
            <StyledTableRow key={user.userName}>
              <StyledTableCell component="th" scope="row">
                {user.userName}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={()=>(deleteUser(user.userName))}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
  );
}