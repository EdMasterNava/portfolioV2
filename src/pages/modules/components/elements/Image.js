import * as React from 'react';
import { Box } from '@mui/material';

function Image(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const image = props.image
    const backgroundSize = props.backgroundSize
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;
    return(
        <Box sx={{ 
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            height: `calc(700% + ${gap * 6}px)`,
            position: 'relative',
            bgcolor: '#696969',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                backgroundImage: `url(${image})`,
                width: '80%',
                height: '80%',
                backgroundSize: backgroundSize,
            }}/>    
        </Box>
    )
}

export default Image;