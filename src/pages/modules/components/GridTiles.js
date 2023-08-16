import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Title from './Title';
import Tagline from './Tagline';
import FeaturedProjects from './FeaturedProjects';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectFour from './ProjectFour';
import AboutMe from './AboutMe';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Email from './Email';

function GridTiles() {
    const [numColumns, setNumColumns] = React.useState(0);
    const [columnWidth, setColumnWidth] = React.useState(0);
    const [numRows, setNumRows] = React.useState(0);
    const [rowHeight, setRowHeight] = React.useState(0);
    const gap = 2;

    React.useEffect(() => {
        const createGrid = () => {
            const totalWidth = document.body.clientWidth - (gap * 2);
            const totalHeight = document.body.clientHeight - (gap * 2);
            const availableWidth = totalWidth - gap * (numColumns - 1);
            const availableHeight = totalHeight - gap * (numRows - 1);
            const size = document.body.clientWidth > 800 ? 110 : 75;
            const columns = Math.floor(availableWidth / (size + gap));
            const rows = Math.floor(availableHeight / (size + gap));
            setNumColumns(columns);
            setColumnWidth((totalWidth + gap) / columns - gap);
            setNumRows(rows);
            setRowHeight((totalHeight + gap) / rows - gap);
        };

        const handleResize = () => {
            createGrid();
        };

        window.addEventListener('resize', handleResize);
        createGrid();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [numColumns, numRows]);

    const addTileElement = (row, column) => {
        const widthSpan = numColumns - 2;
        const projectTwoPlacement = (widthSpan % 2 === 0) ? (widthSpan / 2) + 3 : ((widthSpan - 1) / 2) + 3;
        const projectFourPlacement = (widthSpan % 2 === 0) ? (widthSpan / 2) + 1 : ((widthSpan - 1) / 2) + 1;
        if (row === 1 && column === 1) {
            return <Title columnWidth={columnWidth} gap={gap}/>
        }
        if (row === 3 && column === 1) {
            return <Tagline numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
        }
        if (row === 5 && column === 0) {
            return <FeaturedProjects gap={gap}/>
        }
        if (row === 5 && column === 1) {
            return <ProjectOne numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
        }
        if (row === 5 && column === projectTwoPlacement) {
            return <ProjectTwo numColumns={numColumns} columnWidth={columnWidth} gap={gap} />
        }
        if (row === 10 && column === 1) {
            return <ProjectThree numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
        }
        if (row === 10 && column === projectFourPlacement){
            return <ProjectFour numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
        }
        if (row === 15 && column === 1) {
            return <AboutMe numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
        }
        if (row === 22 && column === 1) {
            return <GitHub gap={gap}/>
        }
        if (row === 22 && column === 3) {
            return <LinkedIn gap={gap}/>
        }
        if (row === 22 && column === 5) {
            return <Email gap={gap}/>
        }
        return null
    }
    return (
        <Grid
            container
            gap={`${gap}px`}
            sx={{
                position: 'relative',
                height: '2750px',
                width: '100vw',
                padding: `${gap}px`,
                zIndex: 1
            }}
        >
            {Array.from(Array(numColumns * numRows)).map((_, index) => {
                const row = Math.floor(index / numColumns);
                const column = index % numColumns;
                return (
                    <Grid key={index} item sx={{ bgcolor: 'black', width: `${columnWidth}px` }} >
                        {addTileElement(row, column)}
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default GridTiles;