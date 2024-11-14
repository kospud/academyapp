
import React, { useEffect, useRef, useState } from 'react'
import { css, styled } from 'styled-components'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { TabletBreakPoint, MobileBreakPoint } from '../../../utils/consts'
import { marginBottom, marginTop } from '../../Gaps'
import { AiOutlineRight } from 'react-icons/ai'
import { responsiveText } from '../../PageBlocks'



export interface AccordionItem {
    number: string,
    title: string,
    content: string
}

const AccordionHeaderText = css`
        text-transform: uppercase;
        font-weight: 600;
        user-select: none;
        ${responsiveText(36, 36, 18)}
`

const AccordionItemContainer = styled.div<{ borderTop: boolean }>`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    border-bottom: solid ${props=>props.theme.colors.text} 2px;
    border-top: ${({ borderTop,theme }) => borderTop ? 'solid '+ theme.colors.text : 'none'} 2px;

    
`
const AccordionItemHeader = styled.div`
    width: 100%;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
`

const ModuleNumber = styled.a`
${AccordionHeaderText}
flex-grow: 1;
${responsiveText(24, 24, 10)}
${marginBottom(45)}
${marginTop(45)}
`

const ModuleName = styled.a`
position: absolute;
left: 25%;
flex-grow: 1;
${AccordionHeaderText}

@media (max-width: ${MobileBreakPoint}){
    left: 20%;
}
`

const ModuleLinkLogo = styled.a`
    ${AccordionHeaderText}
    justify-self: right;
`

const AccordionItemContent = styled.div<{ isOpen: boolean, height: number }>`
    width: 100%;
    overflow: hidden;
    height: ${({ isOpen, height }) => isOpen ? height+'px' : '0px'};
    transition: height 0.3s ease-in-out;

`

const AccordionItemContentText = styled.a`
    display: block;
    position: relative;
    width: 70%;
    left: 25%;
    text-align: justify;
    letter-spacing: -2%;
    ${responsiveText(18, 18, 14)}
    ${marginBottom(45)}

@media (max-width: ${TabletBreakPoint}){
    width: 60%;

}

@media (max-width: ${MobileBreakPoint}){
    width: 65%;
    left: 20%;
}
`
const AccordionItem = ({ title, content, number }: AccordionItem) => {
    const [isOpen, setIsOpen] = useState(false)
    const [contentMaxHeight, setContentMaxHeight] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    const setContentSize = () => {
        if (contentRef.current) {
            const content = contentRef.current

            const height = content.scrollHeight;
            setContentMaxHeight(isOpen ? height : 0)

        }
    }

    useEffect(() => {

        setContentSize()

        window.addEventListener('resize', setContentSize)
        
        return () => {
            
            contentRef.current?.removeEventListener('resize',setContentSize)
        }

    }, [isOpen])
    
    const itemClickHandler = () => {
        setIsOpen(!isOpen)
    }
    const borderTop = parseInt(number) - 1 === 0

    const rotate = isOpen ? '90deg' : '0';

    return <AccordionItemContainer borderTop={borderTop}>
        <AccordionItemHeader onClick={itemClickHandler}>
            <ModuleNumber>{number}/ Модуль</ModuleNumber>
            <ModuleName>{title}</ModuleName>
            <ModuleLinkLogo><AiOutlineRight style={{ scale: '1.5', transform: `translateY(6%) rotate(${rotate})`, transition: 'transform .2s ease-in-out' }} /></ModuleLinkLogo>
        </AccordionItemHeader>
        <AccordionItemContent isOpen={isOpen} height={contentMaxHeight} ref={contentRef}>     
                <AccordionItemContentText>{content}</AccordionItemContentText>
        </AccordionItemContent>
    </AccordionItemContainer>
}

const AccordionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${marginBottom(45)}
`
interface AccordionProps {
    items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {

    const moduleNumberGenerator = (index: number) => {
        const zeroLength = 2;

        return (++index).toString().padStart(zeroLength, '0')
    }
    return (
        <AccordionContainer>
            {
                items.map(({ title, content }, index) => <AccordionItem
                    key={`acccordion-item-${index}`}
                    number={moduleNumberGenerator(index)}
                    title={title}
                    content={content} />)
            }
        </AccordionContainer>
    )
}

function CourseModules() {
    return (
        <Accordion items={[{ number: '1', title: 'Все начинается с песен', content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.' },{ number: '1', title: 'title', content: 'sdfidjfighidfhidghdighdihiu' },{ number: '1', title: 'title', content: 'sdfidjfighidfhidghdighdihiu' },{ number: '1', title: 'title', content: 'sdfidjfighidfhidghdighdihiu' },{ number: '1', title: 'title', content: 'sdfidjfighidfhidghdighdihiu' }]} />
    )
}

export default CourseModules