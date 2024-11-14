import React from 'react'
import { Mentor, ReviewBlock, ReviewText } from '../CourseReview'
import mentorPhoto from '../../../img/mockMentorPhoto.png'
import styled, { CSSProperties } from 'styled-components'
import { marginBottom } from '../../Gaps'
import { isDesktop } from 'react-device-detect'
import { Grid } from 'antd'
import { MobileBreakPoint } from '../../../utils/consts'
import SliderWithCustomArrows from '../../../SliderWidthCustomArrows'
import { relative } from 'path'

const MentorPhoto = styled.img`
    width: 100%;
    object-fit: cover;
`

const MentorPhotoContainer = styled.div`
    width: 60%;
    ${marginBottom(45)}

    @media (max-width: ${MobileBreakPoint}) {
        width: 100%;
    }
`

const CourseMentor = () => {

    const screen = Grid.useBreakpoint()

    const mentorInfo = <Mentor mentor={{ name: 'Рома cvpellv', occupation: 'продюссер, музыкант' }} />
    return <ReviewBlock style={{ marginBottom: screen.xs ? 0 : undefined }}>
        <div style={{width: '88%', position: 'relative', left: '50%', transform: 'translateX(-50%)'}}>
            {!screen.xs && mentorInfo}
            <MentorPhotoContainer>
                <MentorPhoto src={mentorPhoto} />
            </MentorPhotoContainer>
            {screen.xs && mentorInfo}
            <ReviewText last={false}>Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. </ReviewText>
            <ReviewText last={false}>Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. </ReviewText>
            <ReviewText last>Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. </ReviewText>
        </div>
    </ReviewBlock>

}


function CourseMentors() {

    const screen = Grid.useBreakpoint()

    const sliderContainerStyle: CSSProperties = {
        position: 'relative',
        width: '100svw',
        left: '50%',
        transform: 'translateX(-50%)',

    }
    return screen.xs ? <ReviewBlock style={sliderContainerStyle}>
        <SliderWithCustomArrows slidesToShow={1} childrenLength={3} dots>
            <CourseMentor />
            <CourseMentor />
            <CourseMentor />
        </SliderWithCustomArrows>
    </ReviewBlock>
        :
        <>
            <CourseMentor />
            <CourseMentor />
            <CourseMentor />
        </>
}

export default CourseMentors