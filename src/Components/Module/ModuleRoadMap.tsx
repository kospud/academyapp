import React from 'react'
import { Lesson, LessonStatus } from './Lesson'
import styled, { css } from 'styled-components'
import { MobileBreakPoint } from '../../utils/consts'
import { marginBottom, marginTop } from '../Gaps'
import { AccordionContentH1, AccordionContentH2 } from '../Courses/CourseContent/CourseContent'
import { MdDone } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { responsiveText } from '../PageBlocks'


const ModuleRoadMapItemContainer=styled.div`
    display: flex;
    align-items: center;
`

const circleWidth=css`
    width: 5.4svw;

    @media (max-width: ${MobileBreakPoint}){
        width: 10svw;
    }
`
const ModuleRoadMapItemCheckBox=styled.div<{status: LessonStatus}>`
    position: relative;
    ${circleWidth}
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${props=>props.status!==LessonStatus.todo? props.theme.colors.text : 'none'};
    border: solid 3px ${props=> props.theme.colors.text};
    opacity: ${props=>props.status===LessonStatus.todo? '0.5' : '1'};
    color: ${props=>props.theme.colors.secondary};

    ${responsiveText(64, 50, 30)}
    margin-right: 30px;

    svg{
        position: absolute;
        top: 50%;
        left: 50%;
    }

`

const Line=styled.div`
    ${circleWidth}
    aspect-ratio: 2/1;
    position: relative;
    left: 3px;

    &::after{
        content: '';
        width: 3px;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background-color: ${props=>props.theme.colors.text};
        opacity: 0.5;
    }
`

const ModuleRoadMapItemH1=styled(AccordionContentH1)`
    ${marginBottom(12)}
`

const ModuleRoadMapItemH2=styled(AccordionContentH2)`
margin-bottom: 0;
`

interface ModuleRoadMapItemProps{
    lesson: Lesson,
    isLast?: boolean,
}
const ModuleRoadMapItem=({lesson, isLast}: ModuleRoadMapItemProps)=>{

    return <>
    <ModuleRoadMapItemContainer>
        <ModuleRoadMapItemCheckBox status={lesson.status}>
            {lesson.status===LessonStatus.done && <MdDone style={{transform: 'translate(-50%, -50%)'}}/>}
            {lesson.status===LessonStatus.inProgress && <IoMdPlay style={{transform: 'translate(-40%, -50%)'}}/>}
        </ModuleRoadMapItemCheckBox>
        <div>
            <ModuleRoadMapItemH1>{lesson.title}</ModuleRoadMapItemH1>
            <ModuleRoadMapItemH2>{`Урок ${lesson.number}/${lesson.contentType}`}</ModuleRoadMapItemH2>
        </div>
    </ModuleRoadMapItemContainer>
    {!isLast && <Line/>}
    </>
}

const ModuleRoadMapContainer=styled.div`
 
    ${marginTop(90)}

    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`
interface ModuleRoadMapProps{
    lessons: Lesson[]
}
function ModuleRoadMap({lessons}: ModuleRoadMapProps) {
  return (
    <ModuleRoadMapContainer>
        {
            lessons.map((lesson, index, arr)=><ModuleRoadMapItem lesson={lesson} isLast={index===arr.length-1}/>)
        }
    </ModuleRoadMapContainer>
  )
}

export default ModuleRoadMap