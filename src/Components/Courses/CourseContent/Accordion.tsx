
import React, { useState } from 'react'
import { css, styled } from 'styled-components'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { MobileBreakPoint, TabletBreakPoint } from '../../../utils/consts'
import { responsiveText } from '../../PageBlocks'





export interface AccordionItem {
    number: string,
    title: string,
    content: string
}

const AccordionHeaderText=css`
        text-transform: uppercase;
        font-weight: 600;
        user-select: none;
        ${responsiveText(36,18,16)}

`

const AccordionItemContainer = styled.div`
    width: 100%;
    //min-height: 10svh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`
const AccordionItemHeader = styled.div`
    width: 100%;
    height: 16svh;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: ${MobileBreakPoint}){
        height: 10svh;
    }
`

const ModuleNumber=styled.a`
${AccordionHeaderText}
flex-grow: 1;

@media (max-width: ${MobileBreakPoint}){
    font-size: 2.4svw;
}
`

const ModuleName=styled.a`
position: absolute;
left: 30%;
flex-grow: 1;
${AccordionHeaderText}

@media (max-width: ${MobileBreakPoint}){
    left: 20%;
}
`

const ModuleLinkLogo=styled.a`
    margin-right: 2svw;
    ${AccordionHeaderText}
    justify-self: right;
`

const AccordionItemContent=styled.div<{isOpen: boolean}>`
    width: 100%;
    overflow: hidden;
    max-height: ${({isOpen})=>isOpen? '100svh' : '0px'};
    transition: max-height 0.3s ease-in-out;

`

const AccordionItemContentText=styled.a`
display: block;
position: relative;
width: 35%;
left: 30%;
text-align: justify;
        letter-spacing: -2%;
        font-size: 0.9svw;
margin-bottom: 6.6svh;

@media (max-width: ${TabletBreakPoint}){
    width: 60%;
    font-size: 1.8svw;
    margin-bottom: 9svh;
}

@media (max-width: ${MobileBreakPoint}){
    width: 60%;
    font-size: 3.7svw;
    left: 20%;
    margin-bottom: 4svh;
}
`
const AccordionItem = ({ title, content, number }: AccordionItem) => {
    const [isOpen, setIsOpen] = useState(false)

    const itemClickHandler=()=>{
        setIsOpen(!isOpen)
    }


    const rotate=isOpen? '45deg' : '0';
    const translate=isOpen? '6%' : '6%';
    return <AccordionItemContainer>
        <AccordionItemHeader onClick={itemClickHandler}>
            <ModuleNumber>{number}/Модуль</ModuleNumber>
            <ModuleName>{title}</ModuleName>
            <ModuleLinkLogo><MdOutlineArrowOutward style={{ scale: '1.5', transform: `translateY(6%) rotate(${rotate})`, transition: 'transform .2s ease-in-out' }} /></ModuleLinkLogo>
        </AccordionItemHeader>
        <AccordionItemContent isOpen={isOpen}>
            {content}
        </AccordionItemContent>
    </AccordionItemContainer>
}

const AccordionContainer = styled.div`
    width: 94%;
    display: flex;
    flex-direction: column;


    @media (max-width: ${MobileBreakPoint}){
        width: 88%;
    }
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
            <div style={{height: '1svh'}}/>
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

export default Accordion