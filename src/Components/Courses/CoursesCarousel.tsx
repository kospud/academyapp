import React from 'react'
import { AllCoursesContainer, Course, CourseCard } from './AllCourses'
import mockCourse from '../../img/mockCourse.webp'
import styled from 'styled-components'
import SliderWithCustomArrows from '../../SliderWidthCustomArrows'
import { isMobile } from 'react-device-detect'
import { ALL_COURSES_ROUTE, TabletBreakPoint } from '../../utils/consts'
import { marginBottom, marginTop } from '../Gaps'
import { RedLinkButton } from '../PageBlocks'
import { Grid } from 'antd'

const mockCourses: Course[] = [
  {
    id: 0,
    title: 'Как написать песню',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 1,
    title: 'Как стать звездой',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 2,
    title: 'Как написать песню',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 3,
    title: 'Как стать звездой',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
]

const CourseCarouselContainer = styled.div`
  width: 102.5%;
  ${marginTop(90)}

  @media (max-width: ${TabletBreakPoint}){
    width: 190%;
  }
`



function CoursesCarousel() {

  const screen=Grid.useBreakpoint()

  const courses = mockCourses

  const isSlide = isMobile && courses.length > 2

  const courseContainerStyle: React.CSSProperties = {
    width: isSlide ? '100%' : undefined,
    marginBottom: 0
  }

  //const elements = courses.map(course => <CourseCard containerStyle={courseContainerStyle} course={course} />)
  return <>{isSlide ?
    <CourseCarouselContainer>
      <SliderWithCustomArrows childrenLength={courses.length} slidesToShow={4} infinite={isMobile}>
        {
          //elements
        }
      </SliderWithCustomArrows>
    </CourseCarouselContainer>
    :
    <AllCoursesContainer>
      {
        //elements
      }
    </AllCoursesContainer>}
  </>
}

export default CoursesCarousel