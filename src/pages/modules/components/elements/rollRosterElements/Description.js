import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

function Description(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const widthSpan = numColumns - 2;
    const numGaps = widthSpan - 1;
    return(
        <Box sx={{
            bgcolor: 'black', 
            width: `${columnWidth * widthSpan + gap * numGaps}px`,
            height: `calc(400% + ${gap * 3}px)`,
            position: 'relative'
        }}>
            <Box sx ={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}>
                <Grid container>
                    <Grid item md={4}>
                        <Typography variant="h2" sx={{color: 'white', textAlign: 'left'}}>
                            The Roll Roster
                        </Typography>
                    </Grid>
                    <Grid item md={8}/>
                    <Grid item md={4}/>
                    <Grid item md={7} sx={{py: 3}}>
                        <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                            {'The Roll Roster is an online event calendar for jiu jitsu competitors.'}
                        </Typography>
                        <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                            {'The goal was to create a singular place for competitors to view all types of events big or small.'}
                        </Typography>
                        <Typography variant="h6" sx={{textAlign: 'left'}}> 
                            <a style={{textDecoration: 'none', color: 'white'}} href="https://www.therollroster.com/" target='_blank' rel="noreferrer"> 
                                See it in action <LaunchIcon sx={{fontSize: 20}}/>
                            </a>
                        </Typography>
                    </Grid>
                    <Grid item md={1}/>
                </Grid>
            </Box>
        </Box>
    )
}

export default Description;