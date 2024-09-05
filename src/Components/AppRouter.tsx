import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes } from '../utills/routes'
import { MAIN_ROUTE } from '../utills/consts'

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {
          privateRoutes.map(({ path, component }) => <Route key={path} path={path} Component={component} />)
        }
        <Route path='/' element={<Navigate to={MAIN_ROUTE} />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter