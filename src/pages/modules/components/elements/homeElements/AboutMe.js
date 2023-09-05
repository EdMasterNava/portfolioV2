import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function AboutMe(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;

    const events = [
        {
            title: 'ArenaX',
            date: '08/22/23',
            role: 'Frontend and Ai Prompt Engineer'
        },
        {
            title: 'Web3athon',
            date: '04/17/23',
            role: 'Frontend Engineer and Designer'
        }
    ]
    return(
        <Box sx={{
            bgcolor: 'black', 
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            height: `calc(600% + ${gap * 5}px)`,
            position: 'relative',
            display: 'flex'
        }}>
            <Grid container sx={{width: '100%', height: '100'}}>
                <Grid item sx={{width: '50%', position: 'relative'}}>
                    <Box sx={{position: 'absolute', px: '40px', pt: '40px'}}>
                        <Typography sx={{
                            fontFamily: "'Alfa Slab One', cursive",
                            letterSpacing: '2px',
                            fontSize: '3rem',
                            mb: '40px'
                        }}> 
                            About Me
                        </Typography>
                        <Typography sx={{
                            fontFamily: "'Alfa Slab One', cursive",
                            letterSpacing: '2px',
                            fontSize: '1.4rem',
                            mb: '20px'
                        }}>
                            Raised in the sun-soaked streets of Los Angeles, I found stability in a job in 2022. However, I craved more than routine; I sought challenge.
                        </Typography>
                        <Typography sx={{
                            fontFamily: "'Alfa Slab One', cursive",
                            letterSpacing: '2px',
                            fontSize: '1.4rem',
                            mb: '20px'
                        }}>
                            Conversations with software engineer friends revealed a different path—one of constant learning. So I decided to teach myself to code with the goal of becoming a software engineer.
                        </Typography>
                        <Typography sx={{
                            fontFamily: "'Alfa Slab One', cursive",
                            letterSpacing: '2px',
                            fontSize: '1.4rem',
                            mb: '20px'
                        }}>
                            Now I am actively participating in hackathons to hone my skills and I'm currently applying to open positions.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sx={{width: '50%', position: 'relative'}}>
                    <Box sx={{position: 'absolute', px: '40px', pt: '40px', width: '100%'}}>
                        <Typography sx={{
                            fontFamily: "'Alfa Slab One', cursive",
                            letterSpacing: '2px',
                            fontSize: '3rem',
                            mb: '40px'
                        }}> 
                            Hackathons
                        </Typography>
                        {events.map(event => {
                            return (
                               <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box>
                                        <Typography sx={{
                                            fontFamily: "'Alfa Slab One', cursive",
                                            letterSpacing: '2px',
                                            fontSize: '1.5rem'
                                        }}>
                                            {event.title}
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: "'Alfa Slab One', cursive",
                                            letterSpacing: '2px',
                                            fontSize: '1.2rem',
                                            mb: '20px',
                                            color: 'darkgrey'
                                        }}>
                                            {event.role}
                                        </Typography>
                                    </Box>
                                    
                                    <Typography sx={{
                                        fontFamily: "'Alfa Slab One', cursive",
                                        letterSpacing: '2px',
                                        fontSize: '1.5rem',
                                        mb: '20px'
                                    }}>
                                        {event.date}
                                    </Typography>  
                                </Box> 
                            )
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe;