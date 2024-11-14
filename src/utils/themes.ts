import { RiLineHeight } from "react-icons/ri"

export interface FontStyle{
    fontSize: number,
    lineHeight: number
}

export interface Theme {
    colors: {
        primary: string,
        secondary: string,
        text: string,
        border: string,
        error: string,
        progress: string
    },
    /*textStyles: {
            h1: FontStyle,
            h2: FontStyle,
            h3: FontStyle,
            h4: FontStyle,
            h5: FontStyle,
            text: FontStyle,
            bodyRegular: FontStyle,
            footnote: FontStyle,
            textSmall: FontStyle,
            textSuperSmall: FontStyle
            text16: FontStyle
    }*/
}
export const themes: Record<string, Theme> = {
    black: {
        colors: {
            primary: "rgba(204, 51, 39, 1)",
            secondary: "rgba(22, 21, 21, 1)",
            text: "rgba(235, 235, 235, 1)",
            border: "rgba(204, 51, 39, 1)",
            error: "#dc3545",
            progress: 'rgba(52, 157, 94, 1)'
        },
        /*textStyles: {
                h1: {fontSize: 148, lineHeight: 1},
                h2: {fontSize: 64, lineHeight: 1},
                h3: {fontSize: 36, lineHeight: 1},
                h4: {fontSize: 24, lineHeight: 1.3},
                h5: {fontSize: 18, lineHeight: 1.3},
                text: {fontSize: 18, lineHeight: 1.3},
                text16: {fontSize: 16, lineHeight: 1.3},
                bodyRegular: {fontSize: 36, lineHeight: 1.3},
                footnote: {fontSize: 14, lineHeight: 1.3},
                textSmall: {fontSize: 12, lineHeight: 1},
                textSuperSmall: {fontSize: 8, lineHeight: 1}
        }*/
    }
}