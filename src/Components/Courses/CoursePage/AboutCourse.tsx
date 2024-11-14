import React from 'react'
import SkillsCarousel from '../SkillsCarousel'
import { ReviewBlock, ReviewBlockHeader, ReviewText } from '../CourseReview'

function AboutCourse() {
  return (<>
    <ReviewBlock>
      <ReviewText last={false}>Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. </ReviewText>

      <ReviewText last>Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. </ReviewText>
    </ReviewBlock>
    <ReviewBlock>
      <ReviewBlockHeader>Осваиваемые навыки</ReviewBlockHeader>
      <SkillsCarousel skills={['sdfsdfsdf', 'sdfsdfs', 'ewrwerewer', 'cvbcvb']} />
    </ReviewBlock>
  </>
  )
}

export default AboutCourse