import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

function Description(props) {
    const numColumns = props.numColumns;
    const columnWidth = props.columnWidth;
    const gap = props.gap;
    const projectTitle = props.projectTitle
    const descriptions = props.descriptions
    const projectLink = props.projectLink
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
                            {projectTitle}
                        </Typography>
                    </Grid>
                    <Grid item md={8}/>
                    <Grid item md={4}/>
                    <Grid item md={7} sx={{py: 3}}>
                        {descriptions.map(text => {
                            return (
                                <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                    {text}
                                </Typography>
                            )
                        })}
                        <Typography variant="h6" sx={{textAlign: 'left'}}> 
                            <a style={{textDecoration: 'none', color: 'white'}} href={projectLink} target='_blank' rel="noreferrer"> 
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