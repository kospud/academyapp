import { PropsWithChildren, useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { TabletBreakPoint, MobileBreakPoint, DesktopWidth, TabletWidth, MobileWidth } from "../utils/consts"
import { marginBottom, marginTop } from "./Gaps"
import { FontStyle } from "../utils/themes"


export const responsiveText = (desktop: number, tablet: number, mobile: number) => css`
  font-size: ${(desktop / DesktopWidth * 100).toFixed(2)}svw;

@media (max-width: ${TabletBreakPoint}) {
  font-size: ${(tablet / TabletWidth * 100).toFixed(2)}svw;
}

@media (max-width: ${MobileBreakPoint}) {
  font-size: ${(mobile / MobileWidth * 100).toFixed(2)}svw;
}
`

export const responsiveTextFixed = (desktop: number, tablet: number, mobile: number) => css`
  font-size: ${desktop}px;

@media (max-width: ${TabletBreakPoint}) {
  font-size: ${tablet}px;
}

@media (max-width: ${MobileBreakPoint}) {
  font-size: ${mobile}px;
}
`

export const responsiveTextThemed=(desktop: FontStyle, tablet: FontStyle, mobile: FontStyle)=>css`
        font-size: ${desktop.fontSize}px;

    @media (max-width: ${TabletBreakPoint}) {
        font-size: ${tablet.fontSize}px;
    }

    @media (max-width: ${MobileBreakPoint}) {
        font-size: ${mobile.fontSize}px;
    }

`

export const RedButtonStyle = css<{ hover?: boolean }>`
    background-color: ${(props) => props.hover ? props.theme.colors.primary : 'unset'};
    border: solid ${(props) => props.theme.colors.primary};
    text-decoration: none;
    color: ${(props) => props.hover ? props.theme.colors.text : props.theme.colors.primary};
    font-Weight: 600;
    text-transform: uppercase;
    padding-top: 1svw;
    padding-bottom: 1svw;
    padding-right: 3svw;
    padding-left: 3svw;
    border-radius: 5px;
    display: block;
    width: fit-content;
    transition: background-color .1s ease-in-out, color .1s ease-in-out;
    cursor: pointer;
    user-select: none;
    ${responsiveText(36,36,18)}
    font-family: inherit;
    
    @media(max-width: ${MobileBreakPoint}){
        padding-top: 3svw;
        padding-bottom: 3svw;
        padding-right: 5svw;
        padding-left: 5svw;
    }
`
export const RedLinkButtonElement = styled(Link) <{ hover?: boolean }>`
   ${RedButtonStyle}
`

interface RedLinkButtonProps {
    to: string,
    style?: React.CSSProperties,
    onClick?: () => any,
    hover?: boolean
}
export const RedLinkButton = ({ to, style, onClick, hover, children }: PropsWithChildren<RedLinkButtonProps>) => {

    const [btnHover, setHover] = useState(hover || false)


    return <RedLinkButtonElement

        onMouseEnter={() => setHover(!btnHover)}
        onMouseLeave={() => setHover(!btnHover)}
        to={to}
        style={style}
        onClick={onClick}
        hover={btnHover}>{children}</RedLinkButtonElement>
}

const RedButtonElement = styled.button<{ hover: boolean }>`
${RedButtonStyle}
`
interface RedButtonProps {
    style?: React.CSSProperties,
    onClick?: () => any,
    hover?: boolean
}
export const RedButton = ({ style, onClick, hover, children }: PropsWithChildren<RedButtonProps>) => {

    const [btnHover, setHover] = useState(hover || false)

    return <RedButtonElement
        onMouseEnter={() => setHover(!btnHover)}
        onMouseLeave={() => setHover(!btnHover)}
        style={style}
        onClick={onClick}
        hover={btnHover}>
        {children}
    </RedButtonElement>
}

export const Page = styled.div`
    width: 90%;


    @media (max-width:${MobileBreakPoint}){
        width: 88%;
    }
`

export const PageBlock = styled.div`
    width: 100%;
    ${marginBottom(90)}
    /*min-height: 100svh;
    @media (max-width: ${TabletBreakPoint}) and (orientation: portrait){
        min-height: 0px;
        ${marginBottom(90)}
    }*/
`

const headersWidth = css`
    width: 30svw;

    @media (max-width: ${TabletBreakPoint}){
        width: 50svw;
    }

    @media (max-width: ${MobileBreakPoint}){
        width: 50%;
    }
`
export const PageBlockHeader = styled.h1<{ marginTop?: number, marginBottom?: number }>`
    display: inline-block;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
    ${responsiveText(64, 64, 36)}
    text-transform: uppercase;
    font-weight: 700;
    ${(props) => props.marginTop ? marginTop(props.marginTop) : ''}
    ${(props) => props.marginBottom ? marginBottom(props.marginBottom) : ''}
    line-height: 1;
    ${headersWidth}
`

export const PageBlockPhrase = styled.a`
    display: block;
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
    ${responsiveText(18, 18, 12)}
    ${headersWidth}
    ${marginTop(36)}
`

export const PageLinkButtonContainer = styled.div`
${marginTop(90)}
${marginBottom(180)}
display: flex;
justify-content: center;
`

export const TextColorHovered=css`
    &:hover{
        color: ${({theme})=>theme.colors.primary};
        border-color: ${({theme})=>theme.colors.primary};
        transition: color .15s ease-in-out, border-color .3s ease-in-out;
    }
`