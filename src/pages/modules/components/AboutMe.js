import * as React from 'react';
import { Box, Typography } from '@mui/material';

function AboutMe(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;
    return(
        <Box sx={{
            bgcolor: 'black', 
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            height: `calc(600% + ${gap * 5}px)`,
            position: 'relative',
            display: 'flex'
        }}>
        </Box>
    )
}

export default AboutMe;