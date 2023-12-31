import * as React from 'react';
import Title from '../elements/Title';
import FeatureImage from '../elements/FeatureImage';
import Description from '../elements/Description';
import img from '../media/therollroster.png';

export function addRollRosterElements(row, column, gap, numColumns, columnWidth) {
    const projectTitle = 'The Roll Roster'
    const descriptions = [
        'The Roll Roster is an online event calendar for jiu jitsu competitors.',
        'The goal was to create a singular place for competitors to view all types of events big or small.'
    ];
    const projectLink = 'https://www.therollroster.com/';
    const image = img;
    if (row === 1 && column === 1) {
        return <Title gap={gap}/>
    }
    if (row === 3 && column === 1) {
        return (
            <FeatureImage 
                numColumns={numColumns} 
                columnWidth={columnWidth} 
                gap={gap} 
                featureImage={image}
            />
        )
    }
    if (row === 10 && column === 1) {
        return (
            <Description 
                numColumns={numColumns} 
                columnWidth={columnWidth} 
                gap={gap} 
                projectTitle={projectTitle}
                projectLink={projectLink}
                descriptions={descriptions}
            />
        )
    }
    return null
}