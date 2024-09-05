import { Component, lazy } from "react"
import { ALL_COURSES_ROUTE, CHAT_ROUTE, MAIN_ROUTE, MY_COURSES_ROUTE, PROFILE_ROUTE } from "./consts"

export const publicRoutes=[

]

export const privateRoutes=[
    {
        path: MAIN_ROUTE,
        component: lazy(()=>import('../Components/Main/MainPage'))
    },
    {
        path: ALL_COURSES_ROUTE,
        component: lazy(()=>import('../Components/Courses/AllCourses'))
    },
    {
        path: MY_COURSES_ROUTE,
        component: lazy(()=>import('../Components/Courses/MyCourses'))
    },
    {
        path: CHAT_ROUTE,
        component: lazy(()=>import('../Components/Chat/Chat'))
    },
    {
        path: PROFILE_ROUTE,
        component: lazy(()=>import('../Components/Profile/Profile'))
    }
]

