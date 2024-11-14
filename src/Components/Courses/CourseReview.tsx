import React from 'react'
import styled, { css } from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import { responsiveText } from '../PageBlocks'
import { MobileBreakPoint } from '../../utils/consts'
import { PiMicrophone } from "react-icons/pi";
import SkillsCarousel from './SkillsCarousel'

export const ReviewTextStyle = css`
    ${responsiveText(18, 18, 12)}
    color: ${(props) => props.theme.colors.text};
    text-align: justify;
`

export const ReviewBlock = styled.div`
width: 100%;
${marginBottom(90)}
`
export const ReviewBlockHeader = styled.h2`
    ${marginTop(0)}
    ${marginBottom(45)}
    line-height: 1;
    ${responsiveText(36, 36, 24)}
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
`

export const ReviewText = styled.p<{ last: boolean }>`
    display: block;
    width: 83%;
    ${ReviewTextStyle}
    ${(props) => marginBottom(props.last ? 0 : 24)}
    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`

const CourseSizeLi = styled.li<{ last: boolean }>`
    ${ReviewTextStyle}
    ${(props) => marginBottom(props.last ? 0 : 24)}
    
`

const MentorContainer = styled.div`
    display: flex;
    align-items: center;
    ${marginBottom(45)}

`

const MentorNameContainer = styled.div`
    
`

const MentorName = styled.a`
display: block;
      ${marginBottom(24)}
    line-height: 1;
    ${responsiveText(36, 24, 16)}
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
`

const MentorOccupation = styled.a`
${responsiveText(14, 14, 12)}
    ${ReviewTextStyle};
    text-transform: uppercase;
    line-height: 1;
    font-weight: 500;
`

const MentorLogo = styled.div`
    display: block;
    color: ${(props) => props.theme.colors.text};
    width: 10%;
    aspect-ratio: 1/1;
    line-height: 1;
    margin-right: 24px;

    svg{
        width: 100%;
        height: 100%;
    }

    @media (max-width: ${MobileBreakPoint}){
        margin-right: 10px;
    }
`

export type Mentor = {
    name: string,
    occupation: string,
}

interface MentorProps {
    mentor: Mentor
}
export const Mentor = ({mentor}: MentorProps) => {

    return <MentorContainer>
        <MentorLogo><PiMicrophone /></MentorLogo>
        <MentorNameContainer>
            <MentorName>{mentor.name}</MentorName>
            <MentorOccupation>{mentor.occupation}</MentorOccupation>
        </MentorNameContainer>
    </MentorContainer>
}

export type CourseReviewType = {
    reviewBlocks: string[],
    content: string[],
    skills: string[],
    mentors: Mentor[]
}
interface CourseReviewProps {
    review: CourseReviewType
}
function CourseReview({ review }: CourseReviewProps) {
    const { reviewBlocks, content, skills, mentors } = review
    return <>
        <ReviewBlock>
            <ReviewBlockHeader>О чем этот курс?</ReviewBlockHeader>
            {
                reviewBlocks.map((text, index, arr)=><ReviewText last={index===arr.length-1}>{text}</ReviewText>)
            }
        </ReviewBlock>
        <ReviewBlock>
            <ReviewBlockHeader>Объем курса</ReviewBlockHeader>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
                {
                    content.map((text,index,arr)=><CourseSizeLi last={index===arr.length-1}>{text}</CourseSizeLi>)
                }
            </ul>
        </ReviewBlock>
        <ReviewBlock>
            <ReviewBlockHeader>Осваиваемые навыки</ReviewBlockHeader>
            <SkillsCarousel skills={skills}/>
        </ReviewBlock>
        <ReviewBlock>
            <ReviewBlockHeader>Преподаватели</ReviewBlockHeader>
            {
                mentors.map(mentor=><Mentor mentor={mentor}/>)
            }
        </ReviewBlock>
    </>
}

export default CourseReview