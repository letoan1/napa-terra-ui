/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import BasicButtons from '../Button';
import './navigation.scss';

const navBar = [
    {
        title: 'Home',
        class: 'home__sub',
        iconLow: <KeyboardArrowDownIcon />,
        children: [
            'Marketing Software',
            'Help Desk',
            'Finance and Analytics Software',
            'Payment Gateway (LIGHT)',
            'Hosting (LIGHT)',
            'Digital Marketing (LIGHT)',
            'Saas (LIGHT)',
            'Cloud Hosting',
            'Payment Gateway (DARK)',
            'Hosting (DARK)',
            'Digital Marketing (DARK)',
        ],
    },
    {
        title: 'Pages',
        class: 'pages__sub',
        iconLow: <KeyboardArrowDownIcon />,
        childrenList: [
            {
                name: 'row__essential',
                title: 'Essential Pages',
                sub: ['About Us', ' About Business', 'Team', ' Team Details'],
            },
            {
                name: 'row__features',
                title: 'Features Pages',
                sub: ['Service', 'Service Details'],
            },
            {
                name: 'row__other',
                title: 'Other Pages',
                sub: ['FAQ', '404'],
            },
        ],
    },
    {
        title: 'Portfolio',
        class: 'portfolio__sub',
        iconLow: <KeyboardArrowDownIcon />,
        childrenList: [
            {
                item: 'Portfolio Two Column',
                icon: ErrorOutlineOutlinedIcon,
                color: 'warning',
            },
            {
                item: 'Portfolio Three Column',
                icon: AccountCircleOutlinedIcon,
                color: 'primary',
            },
            {
                item: 'Portfolio Masonry',
                icon: LayersOutlinedIcon,
                color: 'warning',
            },
            {
                item: 'Portfolio Details',
                icon: VolumeUpOutlinedIcon,
                color: 'info',
            },
        ],
    },
    {
        title: 'Blog',
        class: 'blog__sub',
        iconLow: <KeyboardArrowDownIcon />,
        children: ['Blog List', 'Blog Details'],
    },
    {
        title: 'Contact',
    },
];

export default function Navigation() {
    const [nav, setNav] = React.useState(false);
    const [isShowNav, setIsShowNav] = React.useState(false);
    const menuRef = React.useRef(null);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    React.useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setNav(true);
            } else {
                setNav(false);
            }
        };
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <AppBar>
            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>
                <div className={nav ? 'nav__top active' : 'nav__top'}>
                    {nav ? (
                        <img
                            src="https://terra.droitlab.com/html/assets/img/logos/sticky_dark_logo.png"
                            alt="logo dark"
                        />
                    ) : (
                        <img src="https://terra.droitlab.com/html/assets/img/logos/logo_4.png" alt="logo" />
                    )}

                    <div className="nav__top-center">
                        {!isShowNav && (
                            <ul>
                                {navBar?.map((nav, index) => (
                                    <li key={index}>
                                        <a href="#">{nav.title}</a>
                                        <span className="nav__top-center-icon">{nav?.iconLow}</span>
                                        <div className={nav.class}>
                                            {nav.class === 'pages__sub' ? (
                                                <div className="pages__sub-row">
                                                    {nav.childrenList.map((row) => (
                                                        <div className={row.name}>
                                                            <>
                                                                <h4 style={{ color: '#000' }}>{row.title}</h4>
                                                                <ul>
                                                                    {row.sub.map((sub) => (
                                                                        <li>
                                                                            <a href="#">{sub}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <>
                                                    {nav?.class === 'portfolio__sub' ? (
                                                        <ul>
                                                            {nav.childrenList?.map((child) => (
                                                                <li
                                                                    className={
                                                                        nav.class === 'portfolio__sub'
                                                                            ? 'portfolio__sub-item'
                                                                            : ''
                                                                    }
                                                                >
                                                                    <a href="#">
                                                                        {<child.icon color={child.color} />}
                                                                        {child.item}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <>
                                                            {nav?.children && (
                                                                <ul>
                                                                    {nav?.children.map((child) => (
                                                                        <li>
                                                                            <a href="#">{child}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                marginLeft: '320%',
                            }}
                        >
                            <MenuIcon className="icon-scroll" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', sm: 'block', md: 'none' },
                                right: 0,
                                left: 0,
                            }}
                        >
                            {navBar.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                    <span className="nav__top-button">
                        <BasicButtons nav={nav} variant={'text mobile'} titleButton={'Login'} />
                        <BasicButtons nav={nav} variant={'outline'} titleButton={'Sign up'} />
                    </span>
                </div>
            </Box>
        </AppBar>
    );
}
