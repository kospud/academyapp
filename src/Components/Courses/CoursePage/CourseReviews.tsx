import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import voice from '../../../audio/sound.mp3'
import casset1 from "../../../img/Casset.webp"
import casset2 from "../../../img/Casset2.webp"
import useSound from 'use-sound'
import { marginBottom } from '../../Gaps'
import { MobileBreakPoint } from '../../../utils/consts'
import { responsiveText } from '../../PageBlocks'
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";

interface Review {
  name: string,
  review: string
}

const mockReview: Review[] = [
  {
    name: 'Ирина',
    review: voice
  },
  {
    name: 'Алексей',
    review: voice
  },
  {
    name: 'Ираклий',
    review: voice
  },
]


const CourseReviewContainer = styled.div`
    position: relative;
    width: 66%;
    ${responsiveText(36,36,18)}
    ${marginBottom(90)}
    @media (max-width: ${MobileBreakPoint}){
      width: 100%;
    }
`

const CassetContainer = styled.div`

cursor: pointer;
z-index: 1;
${marginBottom(45)}
img{
    width: 100%;
    object-fit: cover;
}
`

const Name=styled.a`
  display: block;
  font-weight: 600;
  line-height: 1;
  color: ${props=>props.theme.colors.text};
  text-transform: uppercase;
  text-align: center;
`

const PlayIcon=styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${props=>props.theme.colors.primary};

  ${responsiveText(36,36,24)}

`
interface ReviewProps {
  review: Review
  index: number
}
const CourseReview = ({ review, index }: ReviewProps) => {

  const img = index % 2 === 0 ? casset1 : casset2;

  const [isPlayed, setPlayed] = useState(false);
  const [isLoading, setLoading] = useState(true)
  const [playOn, playOff] = useSound(review.review, {
    onload() {
      setLoading(false)
    },
  })

  const onClickHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setPlayed(prev => !prev)
    return false
  }

  useEffect(() => {

    if (isPlayed) {
      playOn()
    }
    else {
      playOff.pause();
    }
  }, [isPlayed])

  useEffect(()=>{

    return ()=>{
      playOff.stop()
    }
  })

  return <CourseReviewContainer>
    <CassetContainer onClick={onClickHandler}>
      <PlayIcon>
        {isPlayed ? <FaStop /> : <FaPlay />}
      </PlayIcon>
      <img src={img} alt={review.name} />
    </CassetContainer>
    <Name>{review.name}</Name>

  </CourseReviewContainer>
}
function CourseReviews() {

  const reviews=mockReview
  return (
    <>
    {
      reviews.map((review, index)=><CourseReview review={review} index={index}/>)
    }
    </>
  )
}

export default CourseReviews