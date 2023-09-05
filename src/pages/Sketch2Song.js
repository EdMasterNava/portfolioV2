import * as React from 'react';
import GridTiles from './modules/components/GridTiles';
import { addSketch2SongElements } from './modules/components/addElements/AddSketch2SongElements';

function Sketch2Song() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <GridTiles addElements={addSketch2SongElements} pageHeight={3600}/> 
        </>
    );
}

export default Sketch2Song;