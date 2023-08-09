import * as React from 'react';
import { Grid } from '@mui/material';

function GridTiles() {
    const [numColumns, setNumColumns] = React.useState(0);
    const [columnWidth, setColumnWidth] = React.useState(0);
    const [rows, setRows] = React.useState(0);
    const gap = 2;

    React.useEffect(() => {
        const createGrid = () => {
            const totalWidth = document.body.clientWidth - (gap * 2);
            const totalHeight = document.body.clientHeight;
            const availableWidth = totalWidth - gap * (numColumns - 1);
            const availableHeight = totalHeight - gap * (rows - 1);
            const size = 75;
            const column = Math.floor(availableWidth / (size + gap));
            setNumColumns(column);
            setColumnWidth((totalWidth + gap) / column - gap);
            setRows(Math.floor(availableHeight / (size + gap)));
        };

        const handleResize = () => {
            createGrid();
        };

        window.addEventListener('resize', handleResize);
        createGrid();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [numColumns, rows]);
    return (
        <Grid
            container
            gap={`${gap}px`}
            sx={{
                position: 'relative',
                height: '200vh',
                width: '100vw',
                padding: `${gap}px`,
                zIndex: 1
            }}
        >
            {Array.from(Array(numColumns * rows)).map((_, index) => {
                return <Grid key={index} item sx={{ bgcolor: 'black', width: `${columnWidth}px` }} />;
            })}
        </Grid>
    )
}

export default GridTiles;