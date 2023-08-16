import * as React from 'react';
import { Box, Typography } from '@mui/material';

function Tagline(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;
    const calulateFontSize = () => {
        const maxWidth = columnWidth * widthSpan + gap * numGaps;
        const fontSize = Math.min(50, (maxWidth / 30))
        return `${fontSize}px`;
    }
    return (
        <Box sx={{
            position: 'relative',
            height: '100%',
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            bgcolor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography sx={{
                fontFamily: "'Alfa Slab One', cursive",
                letterSpacing: '2px',
                fontSize: calulateFontSize(),
                position: 'absolute',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                '@media (max-width:800px)': {
                    whiteSpace: 'normal',
                    overflow: 'unset',
                    textAlign: 'center',
                    fontSize: '1rem'
                }
            }}>
                Creating intelligent solutions that help people
            </Typography>
        </Box>
    )
}

export default Tagline;