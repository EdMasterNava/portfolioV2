import * as React from 'react';
import Title from '../elements/Title';
import FeatureImage from '../elements/FeatureImage';
import Description from '../elements/Description';
import img from '../media/ai-reporter.png';

export function addAiReporterElements(row, column, gap, numColumns, columnWidth) {
    const projectTitle = 'AI Reporter'
    const descriptions = [
        '',
        ''
    ];
    const projectLink = 'https://www.ai-reporter.net/';
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