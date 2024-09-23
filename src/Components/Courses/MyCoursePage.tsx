import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Page, PageBlock, PageBlockHeader, PageBlockPhrase, RedLinkButton, responsiveText } from '../PageBlocks'
import styled from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import { MobileBreakPoint, TabletBreakPoint } from '../../utils/consts'
import CourseProgress from './CourseProgress'
import CourseReview, { CourseReviewType } from './CourseReview'
import CourseModules, { Module } from './CourseModules'
import CourseContent from './CourseContent/CourseContent'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import moduleImg from '../../img/mockModule.png'

const CourseTitle = styled(PageBlockHeader)`

`

const CourseShortDescription = styled(PageBlockPhrase)`
  text-transform: uppercase;
  ${marginBottom(90)}
`

const CourseScrollableBlock = styled.div`

  width: 100%;
  display: flex;


  @media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
    flex-direction: column;
    height: auto;
  }
`

const CourseMenuContainer = styled.div`
width: 50%;
position: fixed;
display: flex;
flex-direction: column;
@media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
    position: static;
    width: 100%;
  }
`

const CourseScrollContainer = styled.div`
  width: 50%;
  max-height: 100%;
  position: relative;
  margin-left: 50%;
  @media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
    margin-left: 0;
    max-height: none;
    width: 100%;
  }
`

const ScrollContent = styled.div`
  //margin-top: 38svh;
  ${marginTop(90)}
  width: 100%;
`
const MenuItem = styled.a<{ selected: boolean }>`
  color: ${(props) => !props.selected ? props.theme.colors.text : props.theme.colors.primary};
  ${responsiveText(36, 24, 16)}
  ${marginBottom(36)}
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  transition: color .1s ease-in-out;
  user-select: none;
`

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
@media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
  ${marginTop(90)}
  flex-direction: row;
  justify-content: space-between;
}

`
interface MenuProps {
  items: string[],
  setSelectedMenuItem: React.Dispatch<React.SetStateAction<string>>,
  selectedMenuItem: string,
  setMarginTop?: (top: number) => any
}
const Menu = (props: MenuProps) => {
  const { selectedMenuItem, setSelectedMenuItem, items, setMarginTop } = props

  const desktopMenuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (desktopMenuRef.current && setMarginTop) {
      const clientRect = desktopMenuRef.current.getBoundingClientRect();
      setMarginTop(clientRect.top)
    }
  }, [])

  return <MenuContainer ref={desktopMenuRef}>
    {
      items.map((item) => <MenuItem onClick={() => setSelectedMenuItem(item)} selected={item === selectedMenuItem}>{item}</MenuItem>)
    }
  </MenuContainer>
}

const CourseProgressContainer = styled.div`
${marginTop(36)};
width: 130%;

@media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
  width: 75%;
}
`
const CourseProgressInfo = styled.div`
${responsiveText(16, 14, 12)}
color: ${props => props.theme.colors.text};
${marginTop(24)}

`
const MenuButton = styled.div`
  ${marginTop(90)}
  display: flex;

  @media (max-width: ${MobileBreakPoint}){
    ${marginTop(45)}
    justify-content: center;
  }
`
type CoursePageContent={
  review: CourseReviewType
  modules: Module[]
}
const mockCourse: CoursePageContent={
  review: {
    reviewBlocks: [
      'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
      'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'
    ],
    content: ['10 уроков', '5 часов 50 минут', '17 готовых шаблонов'],
    skills: ['Сведение', 'Аранжировка', 'Сонграйтинг', 'мастеринг'],
    mentors: [
      {
      name: 'Роман cvpellv',
      occupation: 'продюссер, музыкант'
    },
  ]
  },
  modules: [
    {
      id: 0,
      title: 'Аранжировка',
      img: moduleImg,
      description: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.',
        'Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
      ]
    },
    {
      id: 0,
      title: 'Аранжировка',
      img: moduleImg,
      description: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.',
        'Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
      ]
    },
    {
      id: 0,
      title: 'Аранжировка',
      img: moduleImg,
      description: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus.',
        'Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
      ]
    }
  ]
}

function MyCoursePage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('')
  const items = ['обзор', 'модули', 'материалы']
  const orientation = useSelector((state: RootState) => state.orientation).orientation
  const [scrollContentMarginTop, setMarginTop] = useState<number | undefined>(undefined)

  const course=mockCourse
  const ElementsToRender: Record<string, React.JSX.Element> = {
    'обзор': <CourseReview review={course.review}/>,
    'модули': <CourseModules modules={course.modules}/>,
    'материалы': <CourseContent />
  }

  const setScrollContentMarginTop = (top: number) => {
    setMarginTop(top)
  }
  const menuProps = { items, setSelectedMenuItem, selectedMenuItem } as MenuProps
  return (
    <Page>
      <PageBlock>
        <CourseScrollableBlock>
          <CourseMenuContainer>
            <CourseTitle marginTop={90}>Как написать песню</CourseTitle>
            <CourseShortDescription>От идеи до продажи</CourseShortDescription>
            {orientation.landscape && <Menu setMarginTop={setScrollContentMarginTop} {...menuProps} />}
              <CourseProgressContainer>
                <CourseProgress coursePageView lessons={10} finishedLessons={3} />
                <CourseProgressInfo>Информация по прогрессу</CourseProgressInfo>
              </CourseProgressContainer>
              <MenuButton>
                <RedLinkButton to='/' hover>Продолжить обучение</RedLinkButton>
              </MenuButton>
            {orientation.portrait && <Menu {...menuProps} />}
          </CourseMenuContainer>
          <CourseScrollContainer>
            <ScrollContent style={{ marginTop: scrollContentMarginTop }}>
              {
                ElementsToRender[selectedMenuItem]
              }
            </ScrollContent>
          </CourseScrollContainer>
        </CourseScrollableBlock>
      </PageBlock>
    </Page>
  )
}

export default MyCoursePage