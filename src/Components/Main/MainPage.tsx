import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Page, PageBlock, PageBlockHeader, PageBlockPhrase, RedLinkButton } from '../PageBlocks'
import MyCoursesCorousel from '../Courses/MyCoursesCorousel'
import AllCourses from '../Courses/AllCourses'
import { ALL_COURSES_ROUTE } from '../../utils/consts'
import styled from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import CoursesCarousel from '../Courses/CoursesCarousel'


const AllCoursesLinkContainer = styled.div`
${marginTop(90)}
${marginBottom(180)}
display: flex;
justify-content: center;
`
function MainPage() {

  return (
    <Page>
      <PageBlock>
        <PageBlockHeader marginTop={90}>Главная</PageBlockHeader>
        <MyCoursesCorousel />
      </PageBlock>
      <PageBlock>
        <PageBlockHeader>Популярные курсы</PageBlockHeader>
        <PageBlockPhrase>Добро пожаловать в мир Академии тут снова будет какой-то текст, но пока что так.</PageBlockPhrase>
        <CoursesCarousel/>
        <AllCoursesLinkContainer>
          <RedLinkButton to={ALL_COURSES_ROUTE} hover>Все курсы</RedLinkButton>
        </AllCoursesLinkContainer>
      </PageBlock>
    </Page>
  )
}

export default MainPage