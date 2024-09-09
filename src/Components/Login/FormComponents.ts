import { Input, Form } from "antd"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { MobileBreakPoint, TabletBreakPoint } from "../../utils/consts"
import { marginBottom, marginTop } from "../Gaps"
import { responsiveText } from "../PageBlocks"

export const FormContainer = styled.div`
  width: 46%;
  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: ${TabletBreakPoint}){
    width: 65%;
  }

  @media (max-width: ${MobileBreakPoint}){
    width: 88%;
  }
`

export const miniText = css`
font-weight: 600;
${responsiveText(18, 18, 16)}
`
export const inputStyle = css`
    background-color: rgb(255, 255, 255);
    height: 3.9svw;
    border: none;
    color: ${(props) => props.theme.colors.primary};
    ${miniText}

    &::placeholder{
        font-weight: 600;
        color: ${(props) => props.theme.colors.primary};
        text-transform: uppercase;
    }

    @media (max-width: ${TabletBreakPoint}){

        height: 7.8svw;
}

@media (max-width: ${MobileBreakPoint}){
    height: 14.4svw;
}
`
export const FormInput = styled(Input)`
${inputStyle}
`
export const FormHeader=styled.h1`
  ${responsiveText(64, 64, 36)}
  color: ${(props)=>props.theme.colors.primary};
  text-transform: uppercase;
  ${marginBottom(90)}
  ${marginTop(90)}
  text-align: center;
`
export const FormContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledForm=styled(Form)`
  ${marginBottom(45)}
`

export const FormLinks=styled.div`
  ${marginTop(90)}
  ${marginBottom(90)}
  width: 85%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${MobileBreakPoint}){
    width: 100%;
  }
`

export const FormLink=styled(Link)`
  text-decoration: none;
  ${miniText}
  color: ${(props)=>props.theme.colors.primary};
  text-transform: uppercase;
`

export const InputDescription=styled.a`
display: block;
text-decoration: none;
pointer-events: none;
${miniText}
color: ${(props)=>props.theme.colors.primary};
font-weight: 500;
text-align: center;
width: 80%;
position: relative;
left: 50%;
transform: translateX(-50%);

@media (max-width: ${MobileBreakPoint}){
    width: 95%;
}
`