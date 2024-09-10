import { css } from "styled-components"
import { TabletBreakPoint, MobileBreakPoint } from "../utils/consts"

interface Margin extends Record<number, string> {
    180: string,
    90: string,
    60: string,
    45: string,
    24: string,
}

const desktop: Margin = {
    0: '0',
    180: '16svh',
    90: '8.3svh',
    60: '5.5svh',
    45: '4.1svh',
    24: '2.2svh'
}

const tablet: Margin = {
    0: '0',
    180: '16svh',
    90: '7.8svh',
    60: '5svh',
    45: '4.1svh',
    24: '2.2svh'
}

const mobile: Margin = {
    0: '0',
    180: '12svh',
    90: '8.1svh',
    60: '5.5svh',
    45: '3.2svh',
    24: '1svh'
}
export const marginBottom = (margin: number) => css`
    margin-bottom: ${desktop[margin]};

@media (max-width: ${TabletBreakPoint}) {
    margin-bottom: ${tablet[margin]};
}

@media (max-width: ${MobileBreakPoint}) {
    margin-bottom: ${mobile[margin]};
}
`

export const marginTop = (margin: number) => css`
    margin-top: ${desktop[margin]};

@media (max-width: ${TabletBreakPoint}) {
    margin-top: ${tablet[margin]};
}

@media (max-width: ${MobileBreakPoint}) {
    margin-top: ${mobile[margin]};
}
`
