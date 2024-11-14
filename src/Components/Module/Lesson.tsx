import React from 'react'
import styled from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import { AccordionContentH1, AccordionContentH2 } from '../Courses/CourseContent/CourseContent'
import { CourseVideoPreview } from '../Courses/CourseContent/CourseVideo'
import { ModuleDescriprionBlock } from '../Courses/CourseModules'
import { responsiveText } from '../PageBlocks'
import CourseFile from '../Courses/CourseContent/CourseFile'
import CourseLink from '../Courses/CourseContent/CourseLink'
import CourseAudio from '../Courses/CourseContent/CourseAudio'
import { MobileBreakPoint } from '../../utils/consts'
import { isDesktop, isMobile, isMobileOnly } from 'react-device-detect'

export enum ContentTypes {
    audio = 'аудио',
    video = 'видео',
    file = 'файл',
    link = 'ссылка'
}

export enum LessonStatus {
    done,
    inProgress,
    todo
}

type LessonMaterial = {
    link: string
    title: string,
    //subtitle: string,
    materialType: ContentTypes
}

export type Lesson = {
    title: string,
    number: number,
    preview?: string
    content: string,
    contentType: ContentTypes,
    description?: string[],
    mobileDescription?: string
    lessonMaterials: LessonMaterial[]
    status: LessonStatus
}


const LessonContainer = styled.div`
    ${marginTop(180)}
    width: 100%;
`

const LessonContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${MobileBreakPoint}){
        flex-direction: column;
    }
`

const LessonHeader = styled(AccordionContentH1)`
    ${responsiveText(64, 64, 24)}
`

const LessonMaterialsHeader = styled(AccordionContentH1)`
    width: 40%;
    ${marginBottom(isMobileOnly? 60 : 90)}
`

const LessonSubheader = styled(AccordionContentH2)`
    ${responsiveText(18, 18, 12)}
    ${marginBottom(45)}
`
const LessonContent = styled.div`
    width: 60%;
    ${marginBottom(36)}
    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`
const LessonDescription = styled.div`
    ${marginBottom(isMobileOnly? 60 : 90)}
    width: 38%;
    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`

export const Matertials = styled.div`
    width: 50%;
    
    @media (max-width: ${MobileBreakPoint}){
        width: 100%;
    }
`
interface LessonProps {
    lesson: Lesson
    module: number
}

export const LessonMaterial = (material: LessonMaterial) => {

    let element = <></>
    if (material.materialType === ContentTypes.file)
        element = <CourseFile title={material.title} link={material.link} />

    if (material.materialType === ContentTypes.link)
        element = <CourseLink title={material.title} link={material.link} />

    return element
}
function ModuleLesson({ lesson,module }: LessonProps) {

    return (
        <LessonContainer>
            <LessonHeader>{lesson.title}</LessonHeader>
            <LessonSubheader>{`Модуль ${module}/Урок ${lesson.number}`}</LessonSubheader>
            <LessonContentContainer>
                <LessonContent>
                    {
                        lesson.contentType === ContentTypes.video && <CourseVideoPreview preview={lesson.preview!} />
                    }
                    {
                        lesson.contentType===ContentTypes.audio && <CourseAudio audio={lesson.content}/>
                    }
                </LessonContent>
                {
                    lesson.description && <LessonDescription>
                        {
                            isDesktop && lesson.description.map((block, index, arr) => <ModuleDescriprionBlock last={index === arr.length - 1}>{block}</ModuleDescriprionBlock>)
                        }
                        {
                            isMobile && <ModuleDescriprionBlock last>{lesson.mobileDescription}</ModuleDescriprionBlock>
                        }
                    </LessonDescription>
                }
            </LessonContentContainer>
            {
                lesson.lessonMaterials.length !== 0 && <>
                    <LessonMaterialsHeader>Дополнительные материалы:</LessonMaterialsHeader>
                    <Matertials>
                        {
                            lesson.lessonMaterials.map(material => <LessonMaterial {...material} />)
                        }
                    </Matertials>
                </>
            }
        </LessonContainer>
    )
}

export default ModuleLesson