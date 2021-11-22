import React from 'react';

import {
    Box,
    Grid,
    Typography
} from '@mui/material';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Classdrawer from '../../classdrawer/ClassDrawer';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, email, score) {
    return { name, email, score };
}

const rows = [
    createData('aldrin guillermo','aldrin@yopmail.com', '23/50'),
    createData('nico bronoso','nico@yopmail.com', '43/50'),
    createData('jomari aquino','joms@yopmail.com', '50/50'),
    createData('jarvis mariano','jarvs@yopmail.com', '43/50'),
    createData('jerick aguado','jerick@yopmail.com', '45/50'),
];

export default function ClassAssignActivity() {
    return (
        <Classdrawer>
            <Box component={Grid} container justifyContent="flex-start" sx={{ padding: 5 }}>
                <Box component={Grid} container justifyContent="flex-start" sx={{ paddingTop: 5 }}>
                    <Box component={Grid} container justifyContent="center" sx={{ marginBottom: 2 }}>
                        <Typography variant="h4"> Assign Activities </Typography>
                    </Box>
                    <TableContainer component={Paper} justifyContent="center">
                        <Table sx={{ minWidth: 300 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Name</StyledTableCell>
                                    <StyledTableCell align="center">Score</StyledTableCell>
                                    <StyledTableCell align="right">Email</StyledTableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell align="left">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.score}</StyledTableCell>
                                        <StyledTableCell align="right">{row.email}</StyledTableCell>
                                        
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Classdrawer>
    )
}
