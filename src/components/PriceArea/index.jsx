/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import './price-area.scss';
import bell_price from '~/assets/img/bell-price.png';

function createData(name, check, check2, check3) {
    return { name, check, check2, check3 };
}

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
        backgroundColor: '#f8f8f8',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const rows = [
    createData(
        'Guarenteed quality control',
        <span className="check">
            <CheckIcon />
        </span>,
        <span className="close">
            <CloseIcon />
        </span>,
        <span className="check">
            <CheckIcon />
        </span>,
    ),
    createData(
        'Top quality service',
        <span className="check">
            <CheckIcon />
        </span>,
        <span className="close">
            <CloseIcon />
        </span>,
        <span className="check">
            <CheckIcon />
        </span>,
    ),
    createData(
        'Best experts at your lease',
        <span className="check">
            <CheckIcon />
        </span>,
        <span className="check">
            <CheckIcon />
        </span>,
        <span className="close">
            <CloseIcon />
        </span>,
    ),
    createData(
        'AI based data management',
        <span className="check">
            <CheckIcon />
        </span>,
        <span className="check">
            <CheckIcon />
        </span>,
        <span className="close">
            <CloseIcon />
        </span>,
    ),
    createData('Pricing', '$100.00', '$200.00', '$300.00'),
    createData(
        '',
        <h5 className="started" style={{ cursor: 'pointer', fontSize: '18px', fontWeight: 100 }}>
            Get Started{' '}
            <span className="move-right">
                {' '}
                <ArrowRightAltIcon />
            </span>
        </h5>,
        <a href="#" className="theme_btn_text">
            Show full comparion
        </a>,
        <a href="#" className="theme_btn_text">
            Show full comparion
        </a>,
    ),
];

export default function PriceArea() {
    const [size, setSize] = React.useState(0);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 739) {
                setSize(true);
            } else {
                setSize(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return (
        <section className="price">
            <div className="price__title">
                <h2 className="title-lg">
                    We are <span className="typo-underline">better</span> than <br /> our competitors
                </h2>
                <p className="under-title-lg">You said I'd feel better if I just worked hard without lifting me up</p>
            </div>
            <div className="container price__area">
                {size ? (
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableBody className="row-table">
                                {rows.map((row) => (
                                    <>
                                        {row.name !== '' && (
                                            <>
                                                <StyledTableRow
                                                    key={row.name}
                                                    sx={{
                                                        '&:last-child td, &:last-child th': { border: 0 },
                                                        padding: '30px 20px',
                                                    }}
                                                >
                                                    <StyledTableCell
                                                        colspan="2"
                                                        sx={{
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        <h5 style={{ fontSize: '20px' }}>{row.name}</h5>
                                                    </StyledTableCell>
                                                </StyledTableRow>

                                                <StyledTableRow align={'center'}>
                                                    <StyledTableCell className="font-table">TerraMart </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <h5 style={{ fontSize: '25px', fontWeight: 400 }}>
                                                            {row.check}
                                                        </h5>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell className="font-table">
                                                        Other Agency #1{' '}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <h5 style={{ fontSize: '25px', fontWeight: 400 }}>
                                                            {row.check2}
                                                        </h5>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow>
                                                    <StyledTableCell className="font-table">
                                                        Other Agency #2{' '}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <h5 style={{ fontSize: '25px', fontWeight: 400 }}>
                                                            {row.check3}
                                                        </h5>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            </>
                                        )}
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#f8eee1' }}>
                                    <TableCell
                                        sx={{
                                            fontSize: '30px',
                                            paddingLeft: '35px',
                                            color: '#2c264a',
                                        }}
                                        className="border-table"
                                    >
                                        Overview
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        className="column-black border-table"
                                        sx={{ fontSize: '30px', width: '293.5px', padding: '30px 20px ' }}
                                    >
                                        <div className="center-img">
                                            <img src={bell_price} alt="" /> TerraMart
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            marginBottom: '4px',
                                            width: '293.5px',
                                            padding: '30px 20px',
                                        }}
                                        className="sm-text border-table"
                                    >
                                        <h5>Other Agency #1</h5>
                                        <p>I just worked hard</p>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            marginBottom: '4px',
                                            width: '293.5px',
                                            padding: '30px 20px',
                                        }}
                                        className="sm-text border-table"
                                    >
                                        <h5>Other Agency #1</h5>
                                        <p>I just worked hard</p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="row-table">
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            padding: '30px 20px',
                                        }}
                                        className="border-table"
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                fontSize: '18px',
                                                padding: '25px 30px',
                                                borderBottom: '1px solid #3f3f3f',
                                            }}
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className="column-black border-table "
                                            sx={{ fontSize: '25px' }}
                                        >
                                            {row.check}
                                        </TableCell>
                                        <TableCell align="center" sx={{ fontSize: '25px' }} className="border-table ">
                                            {row.check2}
                                        </TableCell>
                                        <TableCell align="center" sx={{ fontSize: '25px' }} className="border-table ">
                                            {row.check3}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
        </section>
    );
}
