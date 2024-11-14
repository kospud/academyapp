import React, { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { RedLinkButton, responsiveText } from '../PageBlocks'
import { marginBottom } from '../Gaps'
import moduleImg from '../../img/mockModule.png'
import { isMobile } from 'react-device-detect'
import { useParams } from 'react-router-dom'

const ModuleContainer = styled.div`
  width: 100%;
  ${marginBottom(90)}
`

const TextStyle = css`
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  display: block;
`
const ModuleNumber = styled.a`
  ${responsiveText(64, 36, 16)}
  ${TextStyle}
  ${marginBottom(24)}
  font-weight: 700;
  line-height: 1;
`

const ModuleTitle = styled.a`
  line-height: 1;
    ${responsiveText(18, 16, 12)}
    ${TextStyle}
    font-weight: 600;
    ${marginBottom(45)}
`

const ModuleImgBlock = styled.div`
  display: flex;
  justify-content: space-between;
  ${marginBottom(45)}
`

const ModuleDescriprion = styled.div`
width: 55%;
`

export const ModuleDescriprionBlock = styled.a<{ last?: boolean }>`
position: relative;
  ${TextStyle};
  text-transform: none;
  text-align: justify;
  ${responsiveText(18, 16, 12)}
  ${props => marginBottom(props.last ? 0 : 36)}
`
const ModuleImg = styled.div`

  width: 43%;
  img{
    width: 100%;
    aspect-ratio: 35/39;
    object-fit: cover;
  }
`

export const moduleNumberGenerator = (index: number) => {
  const zeroLength = 2;

  return (++index).toString().padStart(zeroLength, '0')
}

function CourseModule({ module, index }: PropsWithChildren<{ module: Module, index: number }>) {

  const moduleNumber=moduleNumberGenerator(index)
  
  return <ModuleContainer>
    <ModuleNumber>{`${moduleNumber}/ модуль`}</ModuleNumber>
    <ModuleTitle>{module.title}</ModuleTitle>
    <ModuleImgBlock>
      <ModuleImg>
        <img alt={module.title} src={module.img} />
      </ModuleImg>
      <ModuleDescriprion>
        {
          isMobile? <ModuleDescriprionBlock>{module.description[0]}</ModuleDescriprionBlock> : module.description.map((description, index, arr) => <ModuleDescriprionBlock last={index === arr.length - 1}>{description}</ModuleDescriprionBlock>)
        }
      </ModuleDescriprion>
    </ModuleImgBlock>
    <RedLinkButton hover to={`/mycourses/${0}/modules/${parseInt(moduleNumber)}`}>Перейти к урокам</RedLinkButton>
  </ModuleContainer>

}

export interface Module {
  title: string,
  img: string,
  id: string | number,
  description: string[]
}

function CourseModules({modules}: PropsWithChildren<{modules: Module[]}>) {

  return <>
    {
      modules.map((module, index) => <CourseModule key={module.title} module={module} index={index} />)
    }
  </>
}

export default CourseModules