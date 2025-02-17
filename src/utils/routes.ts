import {  lazy } from "react"
import { ALL_COURSES_ROUTE, CHAT_ROUTE, COURSE_MODULE_ROUTE, COURSE_PAGE_ROUTE, COURSE_ROUTE, ERROR_PAGE, HELP_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MY_COURSES_ROUTE, PASSWORD_RESET_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE } from "./consts"
import LoginPage from "../Components/Login/LoginPage"
import RegistrationPage from "../Components/Login/RegistrationPage"
import PasswordResetPage from "../Components/Login/PasswordResetPage"
import ErrorPage from "../Components/ErrorPage"

export const publicRoutes=[
    {
        path: LOGIN_ROUTE,
        component: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        component: RegistrationPage
    },
    {
        path: PASSWORD_RESET_ROUTE,
        component: PasswordResetPage
    }
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
    },
    {
        path: COURSE_ROUTE,
        component: lazy(()=>import('../Components/Courses/MyCoursePage'))
    },
    {
        path: COURSE_MODULE_ROUTE,
        component: lazy(()=>import('../Components/Module/CourseModule'))
    },
    {
        path: COURSE_PAGE_ROUTE,
        component: lazy(()=>import('../Components/Courses/CoursePage/CoursePage'))
    },
    {
        path: SETTINGS_ROUTE,
        component: lazy(()=>import ('../Components/Settings/SettingsPage'))
    },
    {
        path: HELP_ROUTE,
        component: lazy(()=>import('../Components/Help/HelpPage'))
    },
    {
        path: ERROR_PAGE,
        component: ErrorPage
    }
]

