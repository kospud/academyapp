import React, { Suspense, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../utils/routes'
import { LOGIN_ROUTE, MAIN_ROUTE, MobileBreakPoint, TabletBreakPoint } from '../utils/consts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import styled from 'styled-components'
import { isMobile, isMobileOnly } from 'react-device-detect'
import Navbar from './Navbar'
import { setOrientation } from '../store/orientationSlice'
import TopMenu from './TopMenu'
import { Grid } from 'antd'


const AppContainer = styled.div<{ isMobile: boolean }>`
  width: 100svw;
  height: 100svh;
  overflow: hidden;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${MobileBreakPoint}){
    flex-direction: column;
  }
`

const AppContent = styled.div`

  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

`

const App=styled.div`
  width: 100%;
  overflow: hidden;
  height: 100svh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  @media (max-width: ${MobileBreakPoint}){
    height: 90svh;
  }
`

function AppRouter() {
  const userstate = useSelector((state: RootState) => state.user)
  const orientation=useSelector((state: RootState)=>state.orientation).orientation
  const screen=Grid.useBreakpoint()
  const dispatch=useDispatch()
  useEffect(()=>{
    const resetOrinetation=()=>{
        dispatch(setOrientation(''))
    }

    window.addEventListener('resize', resetOrinetation)

    return ()=>window.removeEventListener('resize', resetOrinetation)
  }, [])
  return (
    <AppContainer isMobile={isMobile && orientation.portrait}>
      {
        userstate.user ?
          <>
            {!screen.xs && <Navbar />}
            <App>
            <TopMenu/>         
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
            </App>
            {screen.xs && <Navbar />}
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