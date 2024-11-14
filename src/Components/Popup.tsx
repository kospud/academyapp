import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { marginTop } from './Gaps'
import { MobileBreakPoint } from '../utils/consts'

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 71svw;
    height: 100vh;
    max-height: 100svh;
    overflow-y: hidden;
    background-color: ${props => props.theme.colors.secondary};

    @media (max-width: ${MobileBreakPoint}){
        width: 100svw;
    }
`

const PopupContentContainer = styled.div`
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
`
const PopupContent = styled.div`
    width: 90%;
    ${marginTop(90)}
    display: flex;
    flex-direction: column;
    
`

const LineStyle = css<{ hovered: boolean }>`
    position: absolute;
    content: '';
    background-color: ${props => props.hovered ? props.theme.colors.text : props.theme.colors.primary};
    height: 1px;
    width: 100%;
    scale: 2;
    z-index: 4;
    transition: background-color .1s ease-in-out;
`

const PopupCloseBtn = styled.div<{ hovered: boolean }>`
    width: 36px;
    aspect-ratio: 1/1;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 5%;
    cursor: pointer;
    overflow: hidden;
    clip-path: inset(6px 0px 6px 0px);
    ${marginTop(90)}


    &::after {
        ${LineStyle}
        transform: rotate(45deg);
        top: 50%;
    }
    
    &::before{
        ${LineStyle}
        transform: rotate(-45deg);
        bottom: 50%;
    }

    @media (max-width: ${MobileBreakPoint}){
        width: 32px;
    }
  
`
function Popup({ children, closeHandler }: PropsWithChildren<{ closeHandler: () => any }>) {

    const [btnHovered, setBtnHovered] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if(!popupRef.current)
            return

        const handleClick = (event: any) => {
            const popup = popupRef.current;

            if (popup && !popup.contains(event.target)) {
                closeHandler()
            }
        }

        document.addEventListener('click', handleClick);

        return () => { document.removeEventListener('click', handleClick); }
    }, [])

    return <PopupContainer ref={popupRef}>
            <PopupCloseBtn hovered={btnHovered} onClick={closeHandler} onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)} />
            <PopupContentContainer>
                <PopupContent>
                    {
                        children
                    }
                </PopupContent>
            </PopupContentContainer>
        </PopupContainer>

    
}

export default Popup