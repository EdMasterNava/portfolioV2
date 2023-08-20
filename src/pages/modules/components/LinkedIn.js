import * as React from 'react';
import { Box, Typography } from '@mui/material';

function LinkedIn(props) {
    const gap = props.gap;
    const websiteUrl = 'https://www.linkedin.com/in/eduardo-nava-codes/';
    return(
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Box sx={{
                bgcolor: 'black',
                width: `calc(200% + ${gap}px)`,
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    position: 'absolute',
                    fontFamily: "'Alfa Slab One', cursive",
                    letterSpacing: '2px',
                    fontSize: '2rem'
                }}>
                    LinkedIn
                </Typography>
            </Box>
        </a>
    )
}

export default LinkedIn;