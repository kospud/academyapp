import React from 'react'
import styled from 'styled-components'
import mockVideoPreview from '../../../img/mockVideoPreview.jpg'
import { AccordionContentH1, AccordionContentH2 } from './CourseContent'
import { marginBottom } from '../../Gaps'
import { IoMdPlay } from "react-icons/io";
import { responsiveText } from '../../PageBlocks'

const CourseVideoPreviewContainer = styled.div`
    width: 100%;
    aspect-ratio: 11/6;
    position: relative;

    color: ${props=>props.theme.colors.secondary};
    ${responsiveText(64,64,36)}
    cursor: pointer;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

interface CoursePreviewProps{
    preview: string
}
export const CourseVideoPreview = ({preview}: CoursePreviewProps) => {


    return <CourseVideoPreviewContainer onClick={()=>alert('Тут попап с плеером?')}>
        <IoMdPlay style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>
        <img src={preview} />
    </CourseVideoPreviewContainer>
}

const CourseVideoContainer = styled.div`
    width: 100%;
    ${marginBottom(45)}
`

export interface CourseVideoProps{
    title: string,
    lesson: string,
    preview: string
}
function CourseVideo({preview, lesson, title}: CourseVideoProps) {
    return (
        <CourseVideoContainer>
            <AccordionContentH1>{title}</AccordionContentH1>
            <AccordionContentH2>{lesson}</AccordionContentH2>
            <CourseVideoPreview preview={preview}/>
        </CourseVideoContainer>
    )
}

export default CourseVideo