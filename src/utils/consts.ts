import { isDesktop } from "react-device-detect"

//Маршруты
export const MAIN_ROUTE='/main'
export const ALL_COURSES_ROUTE='/allcourses'
export const MY_COURSES_ROUTE='/mycourses'
export const CHAT_ROUTE='/chat'
export const PROFILE_ROUTE='/profile'
export const LOGIN_ROUTE='/login'
export const REGISTRATION_ROUTE='/registration'
export const PASSWORD_RESET_ROUTE='/passwordreset'
export const BLOG_ROUTE='/blog'
export const COURSE_ROUTE=MY_COURSES_ROUTE+'/:courseId'
export const COURSE_MODULE_ROUTE=COURSE_ROUTE+'/modules/:moduleId'
export const COURSE_PAGE_ROUTE=ALL_COURSES_ROUTE+'/:courseId'
export const HELP_ROUTE='/help'
export const SETTINGS_ROUTE='/settings'

//Размеры на макетах
export const DesktopWidth=1920
export const MobileWidth=390
export const TabletWidth=1440

//брейкпоинты
export const MobileBreakPoint='600px'
export const TabletBreakPoint='1024px'
export const SmallLaptopBreakPoint= '1366px';