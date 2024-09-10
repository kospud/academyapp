import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Page, PageBlock, PageBlockHeader, PageBlockPhrase, PageLinkButtonContainer, RedLinkButton } from '../PageBlocks'
import MyCoursesCorousel from '../Courses/MyCoursesCorousel'
import AllCourses from '../Courses/AllCourses'
import { ALL_COURSES_ROUTE, BLOG_ROUTE } from '../../utils/consts'
import styled from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import CoursesCarousel from '../Courses/CoursesCarousel'
import BlogList from '../Blog/BlogList'

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
        <CoursesCarousel />
        <PageLinkButtonContainer>
          <RedLinkButton to={ALL_COURSES_ROUTE} hover>Все курсы</RedLinkButton>
        </PageLinkButtonContainer>
      </PageBlock>
      <PageBlock>
        <PageBlockHeader>Полезные статьи</PageBlockHeader>
        <BlogList />
        <PageLinkButtonContainer>
          <RedLinkButton to={BLOG_ROUTE} hover>Все статьи</RedLinkButton>
        </PageLinkButtonContainer>
      </PageBlock>
    </Page>
  )
}

export default MainPage