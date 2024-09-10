import React from 'react'
import MyCoursesCorousel from './MyCoursesCorousel'
import { Page, PageBlock, PageBlockHeader } from '../PageBlocks'

function MyCourses() {
  return (
    <Page>
      <PageBlock>
        <PageBlockHeader marginTop={90}>Мои курсы</PageBlockHeader>
        <MyCoursesCorousel />
      </PageBlock>
    </Page>
  )
}

export default MyCourses