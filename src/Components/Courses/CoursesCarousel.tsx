import React from 'react'
import { AllCoursesContainer, Course, CourseCard } from './AllCourses'
import mockCourse from '../../img/mockCourse.webp'

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
    },]

function CoursesCarousel() {

    const courses=mockCourses
  return (
    <AllCoursesContainer>
          {
            courses.map(course => <CourseCard course={course} />)
          }
    </AllCoursesContainer>
  )
}

export default CoursesCarousel