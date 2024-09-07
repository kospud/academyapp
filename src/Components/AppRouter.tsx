import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../utills/routes'
import { LOGIN_ROUTE, MAIN_ROUTE, MobileBreakPoint } from '../utills/consts'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import styled from 'styled-components'
import { isMobileOnly } from 'react-device-detect'
import Navbar from './Navbar'

const AppContainer = styled.div<{ isMobile: boolean }>`
  width: 100svw;
  height: 100svh;
  overflow: hidden;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
`

const AppContent = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100svh;
  @media (max-width: ${MobileBreakPoint}){
    width: 100%;
    height: 90svh;
  }
`

function AppRouter() {
  const userstate = useSelector((state: RootState) => state.user)

  return (
    <AppContainer isMobile={isMobileOnly}>
      {
        userstate.user ?
          <>
            {!isMobileOnly && <Navbar />}
            <AppContent>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {
                    privateRoutes.map(({ path, component }) => <Route key={path} path={path} Component={component} />)
                  }
                  <Route path='/' element={<Navigate to={MAIN_ROUTE} />} />
                </Routes>
              </Suspense>
            </AppContent>
            {isMobileOnly && <Navbar />}
          </>
          :

          <Routes>
            {
              publicRoutes.map(({ path, component }) => <Route key={path} path={path} Component={component} />)
            }
            <Route path='/' element={<Navigate to={LOGIN_ROUTE} />} />
            <Route path='*' element={<Navigate to={LOGIN_ROUTE} />} />
          </Routes>
      }
    </AppContainer>
  )
}

export default AppRouter