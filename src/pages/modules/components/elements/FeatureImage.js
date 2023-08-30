import * as React from 'react';
import { Box } from '@mui/material';

function FeatureImage(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const featureImage = props.featureImage
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;
    return(
        <Box sx={{
            backgroundImage: `url(${featureImage})`, 
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            height: `calc(600% + ${gap * 5}px)`,
            position: 'relative',
            backgroundSize: 'cover'
        }}/>
    )
}

export default FeatureImage;