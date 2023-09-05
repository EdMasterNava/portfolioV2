import * as React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function PageSwitcher(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const prevImage = props.prevImage;
    const nextImage = props.nextImage;
    const prevImagePosition = props.prevImagePosition;
    const nextImagePostion = props.nextImagePostion;
    const prevImageLink = props.prevImageLink;
    const nextImageLink = props.nextImageLink;

    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;

    const [width1, setWidth1] = React.useState('50%');
    const [width2, setWidth2] = React.useState('50%');
    const handleMouseEnter1 = () => {
        setWidth1('52%');
        setWidth2('48%');
    }
    const handleMouseEnter2 = () => {
        setWidth1('48%');
        setWidth2('52%');
    }
    const handleMouseLeave = () => {
        setWidth1('50%');
        setWidth2('50%');
    }
    return (
        <Box sx={{
            position: 'relative',
            height: '100%',
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            bgcolor: 'black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        }}>
            <Link 
                to={prevImageLink} 
                style={{
                    height: '80%',
                    width: width1,
                    transition: 'width 0.3s ease',
                    cursor: 'pointer',
                }}
            >
                <Box  
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url(${prevImage})`,
                        backgroundPosition: prevImagePosition
                    }}
                />
            </Link>
            <Link 
                to={nextImageLink}
                style={{
                    height: '100%',
                    width: width2,
                        transition: 'width 0.3s ease',
                        cursor: 'pointer',
                }}
            >
                <Box 
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url(${nextImage})`,
                        backgroundPosition: nextImagePostion
                    }}
                />
            </Link>
        </Box>
    )
}

export default PageSwitcher;