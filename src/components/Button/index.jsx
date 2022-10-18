import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './button.scss';

export default function BasicButtons(props) {
    const { variant, titleButton, nav, icon } = props;
    return (
        <Stack className="button-type " spacing={2} direction="row">
            <Button className={nav ? 'change-color' : variant} variant={variant}>
                {icon} {titleButton}
            </Button>
        </Stack>
    );
}
