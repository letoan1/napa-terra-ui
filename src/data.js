//Nav
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import footer__img from '~/assets/img/logo_4.png';

export const navBar = [
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

export const listLi = [
    {
        title: 'Call us',
        img: footer__img,
        list: ['925-465-3762', '2627 Park Street, San Francisco, CA', 'Support@droitlab.com'],
        width: 4,
    },
    {
        title: 'About Us',
        list: ['About Agency', 'About Business', 'Our Mission', 'Our History'],
        width: 3,
    },
    {
        title: 'Workflow',
        list: ['Contact Us', 'Classic Fullwidth', 'Classic Boxed', 'Creative Boxed'],
        width: 3,
    },
    {
        title: 'Help & Support',
        list: ['Support', 'FAQ', 'Privacy', 'Term & conditions', 'Reporting'],
        width: 2,
    },
];
