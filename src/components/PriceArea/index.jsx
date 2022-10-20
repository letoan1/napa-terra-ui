/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TableCell from '@mui/material/TableCell';

import './price-area.scss';
import bell_price from '~/assets/img/bell-price.png';

function createData(name, check, check2, check3) {
    return { name, check, check2, check3 };
}

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
        <h5 className="started" style={{ cursor: 'pointer' }}>
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
    return (
        <section className="price">
            <div className="price__title">
                <h2 className="title-lg">
                    We are <span className="typo-underline">better</span> than <br /> our competitors
                </h2>
                <p className="under-title-lg">You said I'd feel better if I just worked hard without lifting me up</p>
            </div>
            <div className="container price__area">
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
                                    className="sm-text     border-table"
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
                                        sx={{ fontSize: '18px' }}
                                    >
                                        {row.check}
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }} className="border-table ">
                                        {row.check2}
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }} className="border-table ">
                                        {row.check3}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
}
