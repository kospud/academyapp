import React from 'react'
import { MobileBreakPoint, TabletBreakPoint } from '../../utils/consts'
import styled, { css } from 'styled-components'
import { marginBottom } from '../Gaps'
import { responsiveText } from '../PageBlocks'

const CourseProgressContainer = styled.div<{coursePageView?: boolean}>`
width: 50%;
display: flex;
align-items: center;
${props=>marginBottom(props.coursePageView? 0 : 45)}

@media (max-width: ${MobileBreakPoint}){
    width: 100%;
}
`

const TextStyle=css`
    color: ${(props) => props.theme.colors.text};
    text-transform: uppercase;
    line-height: 1;
`
const CourseText = styled.a<{coursePageView?: boolean}>`
    display: block;
    ${(props)=>props.coursePageView? responsiveText(36, 24, 16) : responsiveText(18, 18, 12)}
    ${(props)=>props.coursePageView && 'font-weight: 700'};
    ${TextStyle}
`

const CourseLessonsProgressbar = styled.div<{ progress: number,coursePageView?: boolean  }>`
    height: 6px;
    flex-grow: 1;
    min-width: 60px;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 10px;
    margin-left: 6%;
    margin-right: 1%;
    &::after{
        display: block;
        content: '';
        height: 100%;
        width: ${(props) => props.progress + '%'};
        background-color: ${(props) => props.theme.colors.progress};
        border-radius: inherit;
    }

    @media (max-width: ${MobileBreakPoint}){
        height: 3px;
    }
`

interface CoursePropgressProps{
    lessons: number,
    finishedLessons: number,
    coursePageView?: boolean
}

const ProgressNumber=styled.a`
    display: block;
    ${TextStyle}
    ${responsiveText(14, 14, 12)}

`

function CourseProgress({lessons, finishedLessons, coursePageView}: CoursePropgressProps) {

    const progress = Math.round(finishedLessons / lessons * 100)
  return (
    <CourseProgressContainer coursePageView={coursePageView}>
        <CourseText coursePageView={coursePageView}>{`Урок ${finishedLessons}/${lessons}`}</CourseText>
                    <CourseLessonsProgressbar progress={progress} />
                <ProgressNumber>{`${progress}%`}</ProgressNumber>
    </CourseProgressContainer>
  )
}

export default CourseProgress