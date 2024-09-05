export interface Theme {
    colors: {
        primary: string,
        secondary: string,
        text: string,
        border: string,
        error: string,
    }
}
export const themes: Record<string, Theme> = {
    black: {
        colors: {
            primary: "rgba(204, 51, 39, 1)",
            secondary: "rgba(22, 21, 21, 1)",
            text: "rgba(235, 235, 235, 1)",
            border: "rgba(204, 51, 39, 1)",
            error: "#dc3545",
        }
    }
}