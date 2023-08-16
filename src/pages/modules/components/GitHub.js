import * as React from 'react';
import { Box, Typography } from '@mui/material';

function GitHub(props) {
    const gap = props.gap;
    return(
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
                GitHub
            </Typography>
        </Box>
    )
}

export default GitHub;