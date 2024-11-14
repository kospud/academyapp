import React from 'react'
import method from "../../../img/gifs/method.gif"
import mentors from "../../../img/gifs/mentors.gif"
import students from "../../../img/gifs/students.gif"
import interesting from "../../../img/gifs/interesting.gif"
import styled from 'styled-components'
import { responsiveText } from '../../PageBlocks'
import { marginBottom } from '../../Gaps'
import { MobileBreakPoint } from '../../../utils/consts'

const GifsBlockElements = [
    {
        title: 'Авторская методика',
        gifSrc: method,
    },
    {
        title: 'Увлекательный процесс',
        gifSrc: interesting,
    },
    {
        title: 'довольные ученики',
        gifSrc: students,
    },
    {
        title: 'Опытные преподаватели',
        gifSrc: mentors,
    }
]

const WhyUsTitle = styled.a`
    display: block;
    color: ${props => props.theme.colors.text};
    line-height: 1;
    font-weight: 600;
    ${responsiveText(36, 36, 18)}
    ${marginBottom(45)}
    text-transform: uppercase;
`

const WhyUsImg = styled.img`
    width: 70%;
    aspect-ratio: 16/10;
    object-fit: cover;
    ${marginBottom(90)}

    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`
interface WhyUsGifProps {
    gif: { title: string, gifSrc: string }
}
const WhyUsGif = ({ gif }: WhyUsGifProps) => {

    const { title, gifSrc } = gif

    return <>
        <WhyUsTitle>{title}</WhyUsTitle>
        <WhyUsImg src={gifSrc} alt={title} />
    </>
}

function WhyUs() {


    return (
        <>
            {
                GifsBlockElements.map((value) => <WhyUsGif gif={value} />)
            }
        </>
    )
}

export default WhyUs