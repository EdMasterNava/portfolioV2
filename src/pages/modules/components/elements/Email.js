import * as React from 'react';
import { Box, Typography } from '@mui/material';

function Email(props) {
    const gap = props.gap;
    const emailAddress = 'eduardonava2ms@gmail.com';
    const handleDivClick = () => {
        const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${emailAddress}`;
        window.open(mailtoLink, '_blank');
    };
    return(
        <Box 
            onClick={handleDivClick}
            sx={{
                bgcolor: 'black',
                width: `calc(200% + ${gap}px)`,
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}
        >
            <Typography sx={{
                position: 'absolute',
                fontFamily: "'Alfa Slab One', cursive",
                letterSpacing: '2px',
                fontSize: '2rem'
            }}>
                Email
            </Typography>
        </Box>
    )
}

export default Email;