/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';

import BasicButtons from '../Button';
import './navigation.scss';
import { navBar } from '~/data';

export default function Navigation() {
    const [nav, setNav] = React.useState(false);
    const [isShowNav, setIsShowNav] = React.useState(false);
    const menuRef = React.useRef(null);

    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleClickMenu = () => {
        menuRef.current.classList.toggle('toggle');
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
                        {/* <IconButton
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
                        </Menu> */}
                    </div>

                    <div className="button-area" style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="nav__top-button">
                            <BasicButtons nav={nav} variant={'text mobile'} titleButton={'Login'} />
                            <BasicButtons nav={nav} variant={'outline scroll'} titleButton={'Sign up'} />
                        </span>
                        <div class="icon__close" ref={menuRef} onClick={handleClickMenu}>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                        </div>
                    </div>
                </div>
            </Box>
        </AppBar>
    );
}
