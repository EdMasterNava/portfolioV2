import * as React from 'react';
import { Box, Typography } from '@mui/material';

function FeaturedProjects(props) {
    const gap = props.gap;
    return(
        <Box sx={{
            bgcolor: 'black',
            width: '100%',
            height: `calc(200% + ${gap}px)`,
            position: 'relative',
            '@media (max-width:800px)': {
                height: `calc(300% + ${gap * 2}px)`
            }
        }}>
            <Typography sx={{
                position: 'absolute',
                bottom: 7,
                right: 2,
                transform: 'rotate(180deg)', 
                writingMode: 'vertical-lr',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                fontFamily: "'Alfa Slab One', cursive",
                letterSpacing: '2px',
                fontSize: '1.2rem',
                '@media (max-width:800px)': {
                    bottom: 11
                }
            }}>
                Featured Projects
            </Typography>
        </Box>
    )
}

export default FeaturedProjects;