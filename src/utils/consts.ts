import { isDesktop } from "react-device-detect"

//Маршруты
export const MAIN_ROUTE='/main'
export const ALL_COURSES_ROUTE='/allcourses'
export const MY_COURSES_ROUTE='/mycourses'
export const CHAT_ROUTE='/chat'
export const PROFILE_ROUTE='/profile'
export const LOGIN_ROUTE='/login'
export const REGISTRATION_ROUTE='/registration'
export const PASSWORD_RESET_ROUTE='/passwordreser'
export const BLOG_ROUTE='/blog'
export const COURSE_ROUTE=MY_COURSES_ROUTE+'/:id'

export const DesktopWidth=1920
export const MobileWidth=390
export const TabletWidth=960
export const MobileBreakPoint='600px'
export const TabletBreakPoint=isDesktop? '1000px' : '1400px'
export const SmallLaptopBreakPoint= '1366px';