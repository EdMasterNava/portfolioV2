import * as React from 'react';
import { Box, Typography } from '@mui/material';

function Title(props) {
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    return(
        <Box sx={{
            width: `calc(400% + ${gap * 3}px)`, 
            height: '100%', 
            bgcolor: 'black', 
            position: 'relative'
        }}>
            <Box sx={{position: 'absolute', width: '100%'}}>
                <Typography variant='h2' sx={{
                    width: '100%', 
                    textAlign: 'center', 
                    fontFamily: "'Alfa Slab One', cursive",
                    letterSpacing: '2px',
                    fontSize: '55px'
                }}>
                    Eduardo Nava
                </Typography>   
                <Typography variant='h6' sx={{
                    fontFamily: "'Alfa Slab One', cursive", 
                    textAlign: 'center',
                    letterSpacing: '2px'
                }}>
                   Software Engineer 
                </Typography> 
            </Box>
        </Box>
    )
}
export default Title;