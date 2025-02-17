import React from 'react'
import SkillsCarousel from '../SkillsCarousel'
import { ReviewBlock, ReviewBlockHeader, ReviewText } from '../CourseReview'
import { Course } from '../../../generated-types'
import { BaseElement, BaseText, Descendant } from 'slate'

function AboutCourse({course}: {course: Course}) {

  const description=course.description as {children: BaseText[]}[]
  
  return (<>
    <ReviewBlock>
      {
        description.map(block=>block.children.map(child=><ReviewText>{child.text}</ReviewText>))
      }
    </ReviewBlock>
    <ReviewBlock>
      <ReviewBlockHeader>Осваиваемые навыки</ReviewBlockHeader>
      <SkillsCarousel skills={course.skills?.map(skill=>skill.name)?? []} />
    </ReviewBlock>
  </>
  )
}

export default AboutCourse