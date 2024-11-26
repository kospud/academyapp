import React, { useRef, useState } from 'react'
import { Page, PageBlock, PageBlockHeader, responsiveText, TextColorHovered } from '../PageBlocks'
import { Link, Navigate } from 'react-router-dom'
import { PROFILE_ROUTE } from '../../utils/consts'
import { Grid } from 'antd'
import { CourseMenuContainer, CourseScrollableBlock, CourseScrollContainer, CourseShortDescription, Menu, MenuProps, ScrollContent } from '../Courses/MyCoursePage'
import CoursePageAccordion from '../Courses/CoursePage/CoursePageAccordion'
import { ReviewBlock, ReviewBlockHeader, ReviewText } from '../Courses/CourseReview'
import styled from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { Comment } from '../icons'
enum HelpPageMenu{
  courseSearching='Поиск курсов',
  payment='Оплата',
  learningProcess='Процесс обучения',
  userProfile='Мой профиль пользователя'
}

type InfoBlock={
  header: string,
  content: string[]
}

type HelpPageContent={
  courseSearching: InfoBlock[],
  payment: InfoBlock[],
  learningProcess: InfoBlock[]
  userProfile: InfoBlock[]
}
const HelpPageMockContent: HelpPageContent={
  courseSearching: [{
    header: 'Выбор урока',
    content: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
      'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
    ]
  },
  {
    header: 'Выполнение заданий',
    content: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
      'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
    ]
  }],
  payment: [
    {
      header: 'Способ оплаты',
      content: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
      ]
    }
  ],

  learningProcess: [{
    header: 'Выбор урока',
    content: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
      'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
    ]
  },
  {
    header: 'Выполнение заданий',
    content: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
      'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
    ]
  }],

  userProfile: [
    {
      header: 'Вопросы по кабинету',
      content: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
      ]
    },
  ]

}


interface InfoBlocksViewprops{
  blocks: InfoBlock[]
}
function InfoBlocksView({blocks}: InfoBlocksViewprops){

  return <>
  {blocks.map(block=><ReviewBlock>
          <ReviewBlockHeader>{block.header}</ReviewBlockHeader>
          {block.content.map((text, index, array)=><ReviewText last={index===array.length-1}>{text}</ReviewText>)}
        </ReviewBlock>)}
  </>
}

const UserProfileLink=styled(Link)`
  text-decoration: none;
  color: ${(props) =>  props.theme.colors.text};
  ${responsiveText(36, 36, 16)}
  ${marginBottom(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
  ${TextColorHovered};
`

const DownMenuContainer=styled.div`
  ${marginTop(45)}
`
const DownMenuItemElement=styled.div`

  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
 ${responsiveText(48,48,24)}
 ${TextColorHovered}
 ${marginBottom(45)}
`


const DownMenuItemText=styled.a`
   display: block;
   text-transform: uppercase;
   font-weight: 600;
   margin-left: 1em;
   ${responsiveText(24,24,14)}
`

interface DownMenuItemProps{
    icon: JSX.Element
    text: string
    link?: string
}
const DownMenuItem=({icon,text,link}:DownMenuItemProps)=>{

  return <DownMenuItemElement>
    {icon}
    <DownMenuItemText>{text}</DownMenuItemText>
  </DownMenuItemElement>
}

const downMenuItems=[
  {
    text: 'написать сообщение',
    icon: <AiOutlineMessage/>,
    link: ''
  },
  {
    text: 'написать сообщение',
    icon: <Comment/>,
    link: ''
  },
  {
    text: 'написать сообщение',
    icon: <AiOutlineFileText/>,
    link: ''
  }
]
function HelpPage() {

  const [selectedMenuItem, setSelectedMenuItem] = useState<HelpPageMenu | undefined>(undefined)
    const [scrollContentMarginTop, setMarginTop] = useState<number | undefined>(undefined)
    const scrollContainerRef=useRef<HTMLDivElement>(null)

    const screen = Grid.useBreakpoint()
    const setScrollContentMarginTop = (top: number) => {
        setMarginTop(top)
    }
    
    const pageContent=HelpPageMockContent
    const elementsToRender: Record<HelpPageMenu, React.JSX.Element> = {
        [HelpPageMenu.courseSearching]: <InfoBlocksView blocks={pageContent.courseSearching}/>,
        [HelpPageMenu.payment]: <InfoBlocksView blocks={pageContent.payment}/>,
        [HelpPageMenu.learningProcess]: <InfoBlocksView blocks={pageContent.learningProcess}/>,
        [HelpPageMenu.userProfile]: <InfoBlocksView blocks={pageContent.userProfile}/>

    }

    const menuProps = { items: HelpPageMenu, setSelectedMenuItem, selectedMenuItem } as MenuProps

  return (
    <Page>
      <PageBlock>
                <CourseScrollableBlock>
                    <CourseMenuContainer>
                        <PageBlockHeader marginTop={90} marginBottom={90}>Как написать песню</PageBlockHeader>
                        {!screen.xs ? <Menu setMarginTop={setScrollContentMarginTop} {...menuProps} /> : <CoursePageAccordion items={elementsToRender}/>}
                        <DownMenuContainer>
                                {
                                  downMenuItems.map((item)=><DownMenuItem {...item}/>)
                                }
                        </DownMenuContainer>
                    </CourseMenuContainer>
                    {!screen.xs && <CourseScrollContainer ref={scrollContainerRef}>
                        <ScrollContent style={{ marginTop: scrollContentMarginTop }}>
                            {
                                selectedMenuItem && elementsToRender[selectedMenuItem]
                            }
                        </ScrollContent>
                    </CourseScrollContainer>}
                </CourseScrollableBlock>
            </PageBlock>
    </Page>
  )
}

export default HelpPage