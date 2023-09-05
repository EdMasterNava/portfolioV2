import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Tilty from 'react-tilty';
import image from '../media/sketch2song.png';
import { Link } from 'react-router-dom';
import { motion, useIsPresent } from "framer-motion";

function ProjectTwo(props) {
    const [isHovered, setIsHovered] = React.useState(false);
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    const isPresent = useIsPresent();

    const projectTitle = 'sketch2song';
    const projectImage = image
    return(
        <Link to='/sketch2song'>
            <Box 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    bgcolor: 'black', 
                    width: `${widthSpan % 2 === 0 ? (widthSpan / 2 - 2) * columnWidth + gap * (widthSpan / 2 - 3) : ((widthSpan - 1) / 2 - 1) * columnWidth + gap * ((widthSpan - 1) / 2 - 2)}px`,
                    height: `calc(400% + ${gap * 3}px)`,
                    position: 'relative',
                    display: 'flex'
                }}
            >
                <Tilty 
                    easing="cubic-bezier(0.03,0.98,0.52,0.99)"  
                    speed={1250}
                    reverse 
                    glare 
                    max={15}
                    maxGlare={0.2}
                    glareStyle={{
                        backgroundColor: '#887E1D'
                    }} 
                    style={{
                        height: '100%', 
                        width: '100%', 
                        backgroundColor: '#171124',
                        backgroundImage: `url(${projectImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transformStyle: 'preserve-3d',
                        filter: 'grayscale(100%)',
                    }}
                >
                    <Typography sx={{
                        display: `${isHovered ? 'block' : 'none'}`,
                        position: 'absolute',
                        fontFamily: "'Alfa Slab One', cursive",
                        letterSpacing: '2px',
                        fontSize: '25px',
                        bottom: '20px',
                        left: '30px',
                        transform: 'translateZ(30px)',
                        textShadow: '2px 2px 0 white',
                        color: '#424242'
                    }}>
                        {projectTitle}
                    </Typography>
                </Tilty>
            </Box>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </Link>
    )
}

export default ProjectTwo;