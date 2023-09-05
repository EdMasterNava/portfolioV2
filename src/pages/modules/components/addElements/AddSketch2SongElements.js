import * as React from 'react';
import Title from '../elements/Title';
import FeatureImage from '../elements/FeatureImage';
import Description from '../elements/Description';
import Audio from '../elements/Audio';
import Image from '../elements/Image';
import PageSwitcher from '../elements/PageSwitcher';
import img from '../media/sketch2song.png';
import img2 from '../media/sketch2songloading.png';
import img3 from '../media/sketch2songAudio.png';
import prevImage from '../media/ai-reporter.png';
import nextImage from '../media/therollroster.png';

export function addSketch2SongElements(row, column, gap, numColumns, columnWidth) {
    const projectTitle = 'sketch2song'
    const descriptions = [
        'sketch2song allows you to create a sketch and generate a song from that sketch using ai',
        'I built the frontend and added touchscreen functionality.'
    ];
    const projectLink = 'https://www.sketch2song.com/';
    const image = img;
    const image2 = img2;
    const image3 = img3;
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
                image={image2}
                backgroundSize={'100% 120%'}
            />
        )
    }
    if (row === 21 && column === 1) {
        return (
            <Image 
                numColumns={numColumns} 
                columnWidth={columnWidth} 
                gap={gap} 
                image={image3}
                backgroundSize={'100% 122%'}
            />
        )
    }
    if (row === 29 && column === 1) {
        return (
            <Audio 
                numColumns={numColumns} 
                columnWidth={columnWidth} 
                gap={gap} 
            />
        )
    }
    if (row === 30 && column === 1) {
        return (
            <PageSwitcher 
                numColumns={numColumns} 
                columnWidth={columnWidth} 
                gap={gap}
                prevImage={prevImage}
                prevImagePosition={'top -20px left'}
                prevImageLink={'/aireporter'}
                nextImage={nextImage}
                nextImagePostion={'top -10px left'}
                nextImageLink={'/therollroster'}
            />
        )
    }
    return null
}