import * as React from 'react';
import Title from '../elements/Title';
import FeatureImage from '../elements/rollRosterElements/FeatureImage';

export function addRollRosterElements(row, column, gap, numColumns, columnWidth) {
    if (row === 1 && column === 1) {
        return <Title gap={gap}/>
    }
    if (row === 3 && column === 1) {
        return <FeatureImage numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
    }
    return null
}