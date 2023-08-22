import * as React from 'react';
import { Grid } from '@mui/material';

function GridTiles(props) {
    const addElements = props.addElements;
    const pageHeight = props.pageHeight;
    const [numColumns, setNumColumns] = React.useState(0);
    const [columnWidth, setColumnWidth] = React.useState(0);
    const [numRows, setNumRows] = React.useState(0);
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

    return (
        <Grid
            container
            gap={`${gap}px`}
            sx={{
                position: 'relative',
                height: `${pageHeight}px`,
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
                        {addElements(row, column, gap, numColumns, columnWidth)}
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default GridTiles;