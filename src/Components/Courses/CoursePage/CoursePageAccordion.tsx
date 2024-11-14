import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { CoursePageMenu } from './CoursePage'
import { title } from 'process'
import { AiOutlineRight } from 'react-icons/ai'
import { AccordionItemContainer, AccordionItemHeader, AccordionItemContent, AccordionContainer } from '../CourseContent/CourseContent'
import styled from 'styled-components'
import { marginBottom } from '../../Gaps'


const CoursePageAccordionItemContent = styled(AccordionItemContent)`
    width: 100%;
    align-self: start;
    
`

const Title = styled(AccordionItemHeader) <{ isOpen: boolean }>`
    color: ${props => props.isOpen ? props.theme.colors.primary : props.theme.colors.text};
    transition: color .3s ease-in-out;
    ${marginBottom(36)}
`
function CoursePageAccordionItem({ children, title }: PropsWithChildren<{ title: string }>) {

    const [isOpen, setIsOpen] = useState(false)
    const accordionContentRef = useRef<HTMLDivElement>(null)
    const isFirstRender = useRef(true)

    const setContentSize = () => {
        if (accordionContentRef.current) {

            const content = accordionContentRef.current

            if (isOpen) {

                const height = content.scrollHeight
                content.style.height = height + 'px'

                content.addEventListener('transitionend', function transitionEnd() {

                    content.style.height = 'auto'
                    content.removeEventListener('transitionend', transitionEnd);
                })

            } else {

                content.style.height = content.scrollHeight + 'px'

                window.requestAnimationFrame(() => {

                    window.requestAnimationFrame(() => {
                        content.style.height = '0px'
                    })
                })
            }
        }
    }

    /*useEffect(() => {
        window.addEventListener('resize', setContentSize)

        return () => {
            window.removeEventListener('resize', setContentSize)

        }
    }, [])*/

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            setContentSize()
        }
    }, [isOpen])

    const itemClickHandler = () => {

        if (children)
            setIsOpen(prev => (!prev))
    }

    return <AccordionItemContainer>
        <Title isOpen={isOpen} onClick={itemClickHandler}>
            <a>{title}</a>
        </Title>
        <CoursePageAccordionItemContent ref={accordionContentRef} height={0}>
            <div style={{ marginTop: 24 }}>{children}</div>
        </CoursePageAccordionItemContent>
    </AccordionItemContainer>
}


interface CoursePageAccordionProps {
    items: Record<string, React.JSX.Element>
}
function CoursePageAccordion({ items }: CoursePageAccordionProps) {


    return <AccordionContainer>
        {
            Object.keys(items).map(key => <CoursePageAccordionItem title={key}>
                {items[key]}
            </CoursePageAccordionItem>)
        }
    </AccordionContainer>

}

export default CoursePageAccordion