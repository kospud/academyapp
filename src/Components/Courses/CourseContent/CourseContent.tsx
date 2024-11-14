import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { css, styled } from 'styled-components'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { MobileBreakPoint, TabletBreakPoint } from '../../../utils/consts'
import { responsiveText } from '../../PageBlocks'
import { IconType } from 'react-icons'
import CourseAudio, { CourseAudioProps } from './CourseAudio'
import { AiOutlineAudio } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { marginBottom } from '../../Gaps'
import CourseFile, { CourseFileProps } from './CourseFile'
import CourseLink, { CourseLinkProps } from './CourseLink'
import { AiOutlineRight } from "react-icons/ai";
import CourseVideo, { CourseVideoProps } from './CourseVideo'
import mockVideoPreview from '../../../img/mockVideoPreview.jpg'
import mockAudio from '../../../audio/mon amour remix.mp3'

export const AccordionItemContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;   
`
export const AccordionItemHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
    ${responsiveText(36, 36, 16)}
    text-transform: uppercase;
    font-weight: 700;
    ${marginBottom(45)}

    a{
        user-select: none;
        display: block;
        width: 90%;
    }

    svg{
        scale: 1.5;
        transition: rotate .3s ease-in-out;
    }
`

export const AccordionItemContent = styled.div<{ height: number | string}>`
    width: 90%;
    overflow: hidden;
    height: ${({ height }) =>typeof height==='string'? height : height + 'px'};
    transition: height .3s ease-in-out;
    align-self: end;
`

export interface AccordionItemProps {
    title: string,
    icon: any
}

const AccordionItem = ({ title, children, icon }: PropsWithChildren<AccordionItemProps>) => {
    const [isOpen, setIsOpen] = useState(false)
    const [contentMaxHeight, setContentMaxHeight] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)


    const setContentSize = () => {
        if (contentRef.current) {
            const content = contentRef.current

            const height = content.getBoundingClientRect().height
            setContentMaxHeight(isOpen ? height : 0)

        }
    }

    useEffect(() => {
        
        setContentSize()

        window.addEventListener('resize', setContentSize)

        return () => window.removeEventListener('resize', setContentSize)

    }, [isOpen])

    const itemClickHandler = () => {
        if (children)
            setIsOpen(!isOpen)
    }

    

    return <AccordionItemContainer>
        <AccordionItemHeader onClick={itemClickHandler}>
            {icon}
            <a>{title}</a>
            <AiOutlineRight style={{ position: 'absolute', right: 0, rotate: isOpen ? '90deg' : '0deg', scale: '1' }} />
        </AccordionItemHeader>
        <AccordionItemContent height={contentMaxHeight}>
            <div style={{ display: 'inline-block', width: '100%' }} ref={contentRef}>
                {children}
            </div>
        </AccordionItemContent>
    </AccordionItemContainer>
}

export const AccordionContentH1 = styled.a`
    ${responsiveText(36, 36, 16)}
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    line-height: 1;
    ${marginBottom(24)}
`

export const AccordionContentH2 = styled.a`
    ${responsiveText(18, 18, 12)}
    text-transform: uppercase;
    font-weight: 500;
    display: block;
    line-height: 1;
    ${marginBottom(24)}
`

export const AccordionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

type CourseContent = {
    video?: CourseVideoProps[],
    audio?: CourseAudioProps[],
    documents?: CourseFileProps[],
    patterns?: CourseFileProps[],
    links?: CourseLinkProps[]
}
const mockCourseContent: CourseContent = {
    audio: [
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            audio: mockAudio
        },
    ],
    video: [
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            preview: mockVideoPreview
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            preview: mockVideoPreview
        },
        {
            title: 'Аранжировка',
            lesson: 'МОДУЛЬ 1/УРОК 1',
            preview: mockVideoPreview
        }
    ],
    documents: [
        {
            title: 'Презентация с уроками',
            link: '/Презентация с уроками.pdf'
        },
        {
            title: 'Презентация с уроками',
            link: '/Презентация с уроками.pdf'
        },
        {
            title: 'Презентация с уроками',
            link: '/Презентация с уроками.pdf'
        },
        {
            title: 'Презентация с уроками',
            link: '/Презентация с уроками.pdf'
        }
    ],
    patterns: [
        {
            title: 'Презентация с уроками',
            link: '/Презентация с уроками.pdf'
        },
        {
            title: 'Презентация с уроками',
            link: '/Презентация с уроками.pdf'
        },
    ],
    links: [
        {
            title: 'Ссылка',
            link: 'https://www.awwwards.com'
        }
    ]
}
function CourseContent() {

    const content = mockCourseContent

    const pluralize = (len: number, forms: string[]) => {
        const mod10 = len % 10;
        const mod100 = len % 100;

        if (mod10 === 1 && mod100 !== 11) {
            return forms[0];  // Именительный падеж (1 документ)
        } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
            return forms[1];  // Родительный падеж, множественное число (2–4 документа)
        } else {
            return forms[2];  // Родительный падеж, множественное число (5+ документов)
        }
    }
    return (
        <AccordionContainer>
            {content.video && <AccordionItem title={`${content.video.length} видео`} icon={<AiOutlineYoutube />}>
                {
                    content.video.map((preview) => <CourseVideo {...preview} />)
                }
            </AccordionItem>}
            {content.audio && <AccordionItem title={`${content.audio.length} аудио`} icon={<AiOutlineAudio />}>
                {
                    content.audio.map((audio) => <CourseAudio {...audio} />)
                }
            </AccordionItem>}
            {content.documents && <AccordionItem title={`${content.documents.length} ${pluralize(content.documents.length, ['документ', 'документа', 'документов'])}`} icon={<AiOutlineFolderView />}>
                {
                    content.documents.map((document) => <CourseFile {...document}/>)
                }
            </AccordionItem>}
            {content.patterns && <AccordionItem title={`${content.patterns.length} ${pluralize(content.patterns.length, ['шаблон', 'шаблона', 'шаблонов'])}`} icon={<AiOutlineFileText />}>
                {
                    content.patterns.map((pattern) => <CourseFile {...pattern} />)
                }
            </AccordionItem>}
            {content.links && <AccordionItem title={`${content.links.length} ${pluralize(content.links.length, ['ссылка', 'ссылки', 'ссылок'])}`} icon={<AiOutlineLink />}>
                {
                    content.links.map((link) => <CourseLink {...link}/>)
                }
            </AccordionItem>}
        </AccordionContainer>
    )
}

export default CourseContent