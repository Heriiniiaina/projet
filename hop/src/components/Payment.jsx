import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#010f22",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('✅Consultation', "20000 AR"),
  createData('❌Analyse', "120000 AR"),
  createData('✅Consultation', "20000 AR"),
  createData('✅Consultation', "20000 AR"),
  createData('❌Pharmacie', "60000 AR"),
  createData('✅Consultation', "20000 AR"),
];





export  function Payment() {
  return (
    <div data-aos="fade-left" data-aos-delay="1100">
      <TableContainer sx={{bgcolor:"#fff"}}>
        <Table sx={{ Width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>✅Transaction</StyledTableCell>
              <StyledTableCell align="right">💸Valeur</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">💸{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
