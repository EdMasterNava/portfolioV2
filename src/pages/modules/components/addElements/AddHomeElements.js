import * as React from 'react';
import Title from '../elements/Title';
import Tagline from '../elements/homeElements/Tagline';
import FeaturedProjects from '../elements/homeElements/FeaturedProjects';
import ProjectOne from '../projects/ProjectOne';
import ProjectTwo from '../projects/ProjectTwo';
import ProjectThree from '../projects/ProjectThree';
import ProjectFour from '../projects/ProjectFour';
import AboutMe from '../elements/homeElements/AboutMe';
import GitHub from '../elements/GitHub';
import LinkedIn from '../elements/LinkedIn';
import Email from '../elements/Email';

export function addHomeElements(row, column, gap, numColumns, columnWidth) {
    const widthSpan = numColumns - 2;
    const projectTwoPlacement = (widthSpan % 2 === 0) ? (widthSpan / 2) + 3 : ((widthSpan - 1) / 2) + 3;
    const projectFourPlacement = (widthSpan % 2 === 0) ? (widthSpan / 2) + 1 : ((widthSpan - 1) / 2) + 1;
    if (row === 1 && column === 1) {
        return <Title gap={gap}/>
    }
    if (row === 3 && column === 1) {
        return <Tagline numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
    }
    if (row === 5 && column === 0) {
        return <FeaturedProjects gap={gap}/>
    }
    if (row === 5 && column === 1) {
        return <ProjectOne numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
    }
    if (row === 5 && column === projectTwoPlacement) {
        return <ProjectTwo numColumns={numColumns} columnWidth={columnWidth} gap={gap} />
    }
    if (row === 10 && column === 1) {
        return <ProjectThree numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
    }
    if (row === 10 && column === projectFourPlacement){
        return <ProjectFour numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
    }
    if (row === 15 && column === 1) {
        return <AboutMe numColumns={numColumns} columnWidth={columnWidth} gap={gap}/>
    }
    if (row === 22 && column === 1) {
        return <GitHub gap={gap}/>
    }
    if (row === 22 && column === 3) {
        return <LinkedIn gap={gap}/>
    }
    if (row === 22 && column === 5) {
        return <Email gap={gap}/>
    }
    return null
}