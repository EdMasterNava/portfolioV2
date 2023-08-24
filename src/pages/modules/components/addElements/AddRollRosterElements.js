import * as React from 'react';
import Title from '../elements/Title';
import FeatureImage from '../elements/rollRosterElements/FeatureImage';
import Description from '../elements/rollRosterElements/Description';

export function addRollRosterElements(row, column, gap, numColumns, columnWidth) {
    if (row === 1 && column === 1) {
        return <Title gap={gap}/>
    }
    if (row === 3 && column === 1) {
        return <FeatureImage numColumns={numColumns} columnWidth={columnWidth} gap={gap} />
    }
    if (row === 10 && column === 1) {
        return <Description numColumns={numColumns} columnWidth={columnWidth} gap={gap} />
    }
    return null
}