import React from 'react'
import { Page, PageBlock, PageBlockHeader } from '../PageBlocks'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { moduleNumberGenerator } from '../Courses/CourseModules'
import { ContentTypes, Lesson, LessonStatus } from './Lesson'
import mockVideoPreview from '../../img/mockVideoPreview.jpg'
import ModuleRoadMap from './ModuleRoadMap'
import ModuleLesson from './Lesson'
import mockAudio from '../../audio/mon amour remix.mp3'
import { MobileBreakPoint } from '../../utils/consts'
const Module = styled(Page)`
    width: 80%;
    
    @media (max-width:${MobileBreakPoint}){
        width: 88%;
    }
`

type Module = {
    number: number
    lessons: Lesson[]
}

const mockModule: Module = {
    number: 1,
    lessons: [
        {
            title: 'Аранжировка',
            preview: mockVideoPreview,
            number: 1,
            content: '',
            contentType: ContentTypes.video,
            description: [
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet.'
            ],
            mobileDescription: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',

            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.done
        },
        {
            title: 'Все начинается с песен',
            preview: mockVideoPreview,
            content: '',
            number: 2,
            contentType: ContentTypes.video,
            description: [
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet.'
            ],
            mobileDescription: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.inProgress
        },
        {
            title: 'Демо',
            preview: mockVideoPreview,
            content: mockAudio,
            number: 3,
            contentType: ContentTypes.audio,
            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.todo
        },
        {
            title: 'Аранжировка',
            preview: mockVideoPreview,
            content: '',
            number: 3,
            contentType: ContentTypes.video,
            description: [
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet.'
            ],
            mobileDescription: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.todo
        },
        {
            title: 'Аранжировка',
            preview: mockVideoPreview,
            content: '',
            number: 4,
            contentType: ContentTypes.video,
            description: [
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
                'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet.'
            ],
            mobileDescription: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.todo
        },
        {
            title: 'Аранжировка',
            preview: mockVideoPreview,
            content: '',
            number: 5,
            contentType: ContentTypes.video,
            description: [],
            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.todo
        },
        {
            title: 'Аранжировка',
            preview: mockVideoPreview,
            content: '',
            number: 6,
            contentType: ContentTypes.video,
            description: [],
            lessonMaterials: [
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Презентация урока',
                    link: '/Презентация с уроками.pdf',
                    materialType: ContentTypes.file
                },
                {
                    title: 'Ссылка',
                    link: 'https://www.awwwards.com',
                    materialType: ContentTypes.link
                }
            ],
            status: LessonStatus.todo
        }
    ]
}

function CourseModule() {

    const params = useParams<{ courseId: string, moduleId: string }>()

    console.log(params.moduleId)

    const module = mockModule
    const moduleNumber = moduleNumberGenerator(module.number - 1)

    return (
        <Module>
            <PageBlock>
                <PageBlockHeader marginTop={90}>{`${moduleNumber}/модуль`}</PageBlockHeader>
                <ModuleRoadMap lessons={module.lessons} />
            </PageBlock>
            <PageBlock>
                {
                    module.lessons.map(lesson => <ModuleLesson lesson={lesson} module={module.number}/>)
                }
            </PageBlock>
        </Module>
    )
}

export default CourseModule