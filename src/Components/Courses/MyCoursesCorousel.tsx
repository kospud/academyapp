import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import SliderWithCustomArrows from '../../SliderWidthCustomArrows'
import { responsiveText } from '../PageBlocks'
import { isMobile, isMobileOnly } from 'react-device-detect'
import { marginBottom, marginTop } from '../Gaps'
import mockCourse from '../../img/mockCourse.webp'
import { MobileBreakPoint } from '../../utils/consts'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
interface Course {
    id: number | string,
    title: string,
    totalLessons: number,
    finishedLessons: number,
    img: string
}
const mockCourses: Course[] = [
    {
        id: 0,
        title: 'Как написать песню',
        totalLessons: 10,
        finishedLessons: 2,
        img: mockCourse
    },
    {
        id: 1,
        title: 'Как стать звездой',
        totalLessons: 10,
        finishedLessons: 0,
        img: mockCourse
    },
]

const CourseCardContainer = styled.div`
    //width: 50%;
    position: relative;
    
`

const CourseTitle = styled.a`
    display: block;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(64, 64, 16)}
    text-transform: uppercase;
    font-weight: 800;
    line-height: 1;
    ${marginBottom(24)}
`

const CourseProgress = styled.div`
width: 100%;
display: flex;
align-items: center;
${marginBottom(45)}
`
const CourseText = styled.a`
    display: block;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(18, 18, 12)}
    text-transform: uppercase;
    line-height: 1;
`

const CourseLessonsProgressbar = styled.div<{ progress: number }>`
    height: 6px;
    width: 18%;
    min-width: 60px;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 10px;
    margin-left: 3%;
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

const CourseImg = styled.img`
    object-fit: cover;
    width: 37svw;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${marginBottom(45)}
`

const CourseLink = styled(Link)`
display: block;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(36, 36, 12)}
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
`
const CourseCard = ({ course }: PropsWithChildren<{ course: Course }>) => {

    const progress = Math.round(course.finishedLessons / course.totalLessons * 100)

    const linkPhrase = course.finishedLessons === 0 ? 'начать' : 'продолжить'

    return <CourseCardContainer>
        <div style={{ position: isMobileOnly ? 'absolute' : undefined, transform: isMobileOnly ? 'translate(10%,10%)' : undefined }}>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseProgress>
                <CourseText>{`Урок ${course.finishedLessons}/${course.totalLessons}`}</CourseText>
                <CourseLessonsProgressbar progress={progress} />
                <CourseText>{`${progress}%`}</CourseText>
            </CourseProgress>
        </div>
        <CourseImg alt={course.title} src={course.img} />
        <CourseLink to={'/courses/' + course.id}>{`${linkPhrase} изучение`}</CourseLink>
    </CourseCardContainer>
}

const MyCoursesCarouselContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${marginTop(90)}
`

function MyCoursesCorousel() {

    const courses = mockCourses

    const slidesToShow = isMobile ? 1 : 2
    return (
        <MyCoursesCarouselContainer>
            {
                courses.map((course) => <CourseCard course={course} />)
            }
        </MyCoursesCarouselContainer>
    )
}

export default MyCoursesCorousel