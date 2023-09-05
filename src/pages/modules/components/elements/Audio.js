import * as React from 'react';
import { Box, Typography } from '@mui/material';
import s2sAudio from '../media/sketch2song-audio.wav';

function Audio(props) {
    const audioRef = React.useRef(null);
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;

    const audioUrl = s2sAudio;
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
            <audio ref={audioRef} controls>
                <source src={audioUrl} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </Box>
    )
}

export default Audio;