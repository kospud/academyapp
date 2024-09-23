import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import SliderWithCustomArrows from '../../SliderWidthCustomArrows'
import { isMobile } from 'react-device-detect'
import { ReviewTextStyle } from './CourseReview'
import { responsiveText } from '../PageBlocks'
import { MobileBreakPoint } from '../../utils/consts'


const SkillContainer=styled.div`
width: 100%;
`
const Skill=styled.div`
    display: block;
    width: 90%;
    aspect-ratio: 1/1;
    border: solid 3px ${(props=>props.theme.colors.text)};
    border-radius: 10px;
    ${responsiveText(18, 18, 12)};
    color: ${(props) => props.theme.colors.text};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`

const Skills=styled.div`
width: 100%;

@media (max-width: ${MobileBreakPoint}){
    width: 120%;
}
`


const SkillsNoScrollable=styled(Skills)`
    display: flex;
`

const SkillsNoScrollableElement=styled.div`
    width: 25%;
`

function SkillsCarousel({skills}: PropsWithChildren<{skills: string[]}>) {

    const scrollable=skills.length>=4;
  return scrollable?
    <Skills>
        <SliderWithCustomArrows childrenLength={skills.length} slidesToShow={4} infinite={isMobile}>
            {
                skills.map((skill)=><SkillContainer key={skill}><Skill>{skill}</Skill></SkillContainer>)
            }
        </SliderWithCustomArrows>
    </Skills>
    : <SkillsNoScrollable>
        {
            skills.map((skill)=><SkillsNoScrollableElement key={skill}><Skill>{skill}</Skill></SkillsNoScrollableElement>)
        }
    </SkillsNoScrollable>
}

export default SkillsCarousel