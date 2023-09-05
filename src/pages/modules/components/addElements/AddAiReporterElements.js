import * as React from 'react';
import Title from '../elements/Title';
import FeatureImage from '../elements/FeatureImage';
import Description from '../elements/Description';
import Image from '../elements/Image';
import img from '../media/ai-reporter.png';

export function addAiReporterElements(row, column, gap, numColumns, columnWidth) {
    const projectTitle = 'AI Reporter'
    const descriptions = [
        'AI Reporter is the submission for the ArenaX hackathon, which focused on sports tech',
        "We took basketball game announcer's audio and use AI to write an article and create an image based on that audio."
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
    if (row === 13 && column === 1) {
        return (
            <Image 
                numColumns={numColumns} 
                columnWidth={columnWidth} 
                gap={gap} 
            />
        )
    }
    return null
}