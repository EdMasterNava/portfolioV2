import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Tilty from 'react-tilty';

function ProjectOne(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    return(
        <Box sx={{
            bgcolor: 'black', 
            width: `${widthSpan % 2 === 0 ? (widthSpan / 2 + 1) * columnWidth + gap * (widthSpan / 2 ) : ((widthSpan - 1) / 2 + 1) * columnWidth + gap * ((widthSpan - 1) / 2)}px`,
            height: `calc(400% + ${gap * 3}px)`,
            position: 'relative',
            display: 'flex'
        }}>
            <Tilty 
                easing="cubic-bezier(0.03,0.98,0.52,0.99)" 
                reverse 
                glare 
                max={15}
                maxGlare={0.8}
                glareStyle={{
                    backgroundColor: '#887E1D'
                }} 
                style={{
                    height: '100%', 
                    width: '100%', 
                    backgroundColor: '#171124'
                }}
            >
                <Typography sx={{position: 'absolute'}}>
                    Project 1
                </Typography>
            </Tilty>
        </Box>
    )
}

export default ProjectOne;