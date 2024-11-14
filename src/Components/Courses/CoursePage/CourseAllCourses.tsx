import React from 'react'
import styled from 'styled-components'
import { AllCoursesContainer, Course, CourseCard, mockCourses } from '../AllCourses'



const CoursesContainer=styled(AllCoursesContainer)`
    margin-top: 0;
`
function CourseAllCourses() {

    const courses=mockCourses
  return (
    <CoursesContainer>
        {
            courses.map((course)=><CourseCard course={course} containerStyle={{width: '50%'}}/>)
        }
    </CoursesContainer>
  )
}

export default CourseAllCourses