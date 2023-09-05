import * as React from 'react';
import GridTiles from './modules/components/GridTiles';
import { addAiReporterElements } from './modules/components/addElements/AddAiReporterElements';

function AiReporter() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <GridTiles addElements={addAiReporterElements} pageHeight={2500}/> 
        </>
    );
}

export default AiReporter;