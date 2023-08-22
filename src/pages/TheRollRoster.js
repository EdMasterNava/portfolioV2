import * as React from 'react';
import GridTiles from './modules/components/GridTiles';
import { addRollRosterElements } from './modules/components/addElements/AddRollRosterElements';

function TheRollRoster() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <GridTiles addElements={addRollRosterElements} pageHeight={1500}/> 
        </>
    );
}

export default TheRollRoster;