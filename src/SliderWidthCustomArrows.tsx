import React, { PropsWithChildren, useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from 'styled-components';
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MobileBreakPoint, TabletBreakPoint } from './utils/consts';
import { isDesktop } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';

enum arrowType {
    prev,
    next
}
interface SliderProps {
    slidesToShow: number,
    childrenLength: number,
    infinite?: boolean
    dots?: boolean
}

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
`

const CustomArrow = styled.div<{ type: arrowType }>`
width: fit-content;
height: fit-content;
color: #c9c9c9;
opacity: 0.5;
transition: opacity .1s ease-in-out;
pointer-events: auto;
cursor: pointer;
font-size: 64px;
&:hover{
    opacity: 0.9;
}
`

const ArrowsContainer=styled.div`
width: 87svw;
z-index: 1;
position: absolute;
top: 50%;
left: 0;
transform: translate(-5%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${TabletBreakPoint}){
    width: 110%;
    
}

@media (max-width: ${MobileBreakPoint}) {
    width: 113%;
}
`

const DotsContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`

const Dot=styled.div<{selected: boolean}>`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${({selected})=>selected? '0.5': '1'};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`

const CustomSlider=styled(Slider)`
    
`
function SliderWithCustomArrows({ children, slidesToShow, childrenLength, infinite, dots=false }: PropsWithChildren<SliderProps>) {


    const sliderRef = useRef<Slider>(null)

    const [selectedIndex, setSelectedIndex]=useState(0)
    

    const isSlided = infinite ?? childrenLength > slidesToShow
    const settings: Settings = {
        arrows: false,
        slidesToScroll: 1,
        infinite: isSlided,
        dots: false,
        slidesToShow: slidesToShow,
        swipeToSlide: isSlided,
        rows: 1,
        beforeChange(currentSlide: number, nextSlide: number) {
            setSelectedIndex(nextSlide)
        },
    }

    const nextSlide=()=>{
        sliderRef.current?.slickNext()
    }

    const prevSlide=()=>{
        sliderRef.current?.slickPrev()
    }

    const handlers=useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide
    })
    return (
        <SliderContainer {...handlers}>
            {isSlided && isDesktop && <ArrowsContainer>
            <CustomArrow type={arrowType.prev} onClick={prevSlide}>
                <RiArrowLeftWideFill />
            </CustomArrow>
            <CustomArrow type={arrowType.next} onClick={nextSlide}>
                <RiArrowRightWideFill />
            </CustomArrow>
            </ArrowsContainer>}
            <CustomSlider ref={sliderRef} {...settings}>
                {
                    children
                }
            </CustomSlider>
            {dots && <DotsContainer>
                    {

                        Array(childrenLength).fill(null).map((_, index)=><Dot key={index} selected={selectedIndex===index}/>)
                    }
                </DotsContainer>}

        </SliderContainer>
    )
}

export default SliderWithCustomArrows