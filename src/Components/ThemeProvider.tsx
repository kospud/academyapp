import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { ThemeProvider } from 'styled-components'

function AppThemeProvider({ children }: PropsWithChildren) {
    const theme = useSelector((state: RootState) => state.theme.theme)

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>

    )
}

export default AppThemeProvider