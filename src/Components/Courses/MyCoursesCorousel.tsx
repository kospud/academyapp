import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import SliderWithCustomArrows from '../../SliderWidthCustomArrows'
import { responsiveText, responsiveTextThemed, TextColorHovered } from '../PageBlocks'
import { isMobile, isMobileOnly } from 'react-device-detect'
import { marginBottom, marginTop } from '../Gaps'
import mockCourse from '../../img/mockCourse.webp'
import { MobileBreakPoint, MY_COURSES_ROUTE, TabletBreakPoint } from '../../utils/consts'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import CourseProgress from './CourseProgress'
import { Grid } from 'antd'
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
    }
]

const CourseCardContainer = styled.div`
    width: 95%;   
`

const CourseTitle = styled.a`
    display: block;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(64, 36, 16)}
    text-transform: uppercase;
    font-weight: 700;
    
    ${marginBottom(24)}
`

const CourseImg = styled.img`
    object-fit: cover;
    width: 91%;
    aspect-ratio: 18/10;
    pointer-events: none;
    ${marginBottom(45)}
`

const CourseLink = styled(Link)`
    display: block;
    text-decoration: none;
    width: fit-content;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(36, 36, 12)}
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    ${TextColorHovered}
`
const CourseCard = ({ course }: PropsWithChildren<{ course: Course }>) => {

    const screen=Grid.useBreakpoint()
    const progress = Math.round(course.finishedLessons / course.totalLessons * 100)

    const linkPhrase = course.finishedLessons === 0 ? 'начать' : 'продолжить'

    return <CourseCardContainer>
            <div style={{position: screen.xs ? 'absolute' : undefined, transform: screen.xs ? 'translate(10%,15%)' : undefined }}>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseProgress lessons={course.totalLessons} finishedLessons={course.finishedLessons}/>
            </div>

            <CourseImg alt={course.title} src={course.img} />
            <CourseLink to={MY_COURSES_ROUTE+'/'+ course.id}>{`${linkPhrase} изучение`}</CourseLink>
    </CourseCardContainer>
}

const MyCoursesCarouselContainer = styled.div`

  position: relative;
  width: 105%;

${marginTop(90)};

@media (max-width: ${TabletBreakPoint}){
    width: 180%;
}

`

function MyCoursesCorousel() {

    const courses = mockCourses


    return (
        <MyCoursesCarouselContainer>
            <SliderWithCustomArrows childrenLength={courses.length} slidesToShow={2} infinite={isMobile}>
                {
                    courses.map((course) => <CourseCard course={course} />)
                }
            </SliderWithCustomArrows>
        </MyCoursesCarouselContainer>
    )
}

export default MyCoursesCorousel