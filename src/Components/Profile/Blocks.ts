import styled, { css } from "styled-components";
import { responsiveText } from "../PageBlocks";
import { marginBottom, marginTop } from "../Gaps";
import { MobileBreakPoint, TabletBreakPoint } from "../../utils/consts";

export const UserProfileBlockHeader = styled.a`
    display: block;
    user-select: none;
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    ${responsiveText(36, 36, 18)}
    text-transform: uppercase;
    ${marginBottom(45)}
`

export const UserProfileBlockDescription = styled.a`
    display: block;
    color: ${props => props.theme.colors.text};
    ${responsiveText(18, 18, 12)}
    max-width: 30%;
    @media (max-width: ${TabletBreakPoint}) {
        max-width: 65%;
    }

    @media (max-width: ${MobileBreakPoint}) {
        max-width: 80%;
    }
`

export const UserProfileBlockStyle = css`
    display: block;
     ${marginBottom(180)}

`

export const ButtonContainer=styled.div`
    ${marginTop(60)}
`