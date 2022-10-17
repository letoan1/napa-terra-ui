/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import './price-area.scss';
import bell_price from '../../assets/img/bell-price.png';

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
        <h5 className="started">
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
                                <TableCell sx={{ fontSize: '30px', paddingLeft: '35px' }}>Overview</TableCell>
                                <TableCell align="center" className="column-black" sx={{ fontSize: '30px' }}>
                                    <div className="center-img">
                                        <img src={bell_price} alt="" /> TerraMart
                                    </div>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontSize: '18px', fontWeight: 400, marginBottom: '4px' }}
                                >
                                    <h5>Other Agency #1</h5>
                                    <p>I just worked hard</p>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontSize: '18px', fontWeight: 400, marginBottom: '4px' }}
                                >
                                    <h5>Other Agency #1</h5>
                                    <p>I just worked hard</p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{ fontSize: '18px', paddingLeft: '35px' }}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" className="column-black" sx={{ fontSize: '18px' }}>
                                        {row.check}
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>
                                        {row.check2}
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>
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
