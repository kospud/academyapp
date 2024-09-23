import React, { PropsWithChildren } from 'react'
import styled from "styled-components";
import { TabletBreakPoint } from "../../utils/consts";
import { marginTop } from "../Gaps";

const CourseScrollContainer = styled.div`
  width: 50%;
  max-height: 100%;
  ${marginTop(90)}
  overflow-y: visible;
  overflow-x: hidden;
  position: relative;
  @media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
    max-height: none;
    width: 100%;
  }
`
const ScrollContent=styled.div`
    width: 100%;
`


function CourseScroll({children}: PropsWithChildren) {
  return <CourseScrollContainer>
        <ScrollContent>
            {children}
        </ScrollContent>
  </CourseScrollContainer>
}

export default CourseScroll