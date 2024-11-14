import { link } from 'fs';
import React, { Children, PropsWithChildren, useEffect, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ALL_COURSES_ROUTE, CHAT_ROUTE, MAIN_ROUTE, MobileBreakPoint, MY_COURSES_ROUTE, PROFILE_ROUTE, TabletBreakPoint } from '../utils/consts';
import { isMobile, isMobileOnly } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { responsiveText } from './PageBlocks';
/*import { ReactComponent as HomeIcon } from '../../src/img/NavbarIcons/Home.svg'
import { ReactComponent as AllCoursesIcon } from '../../src/img/NavbarIcons/Starallcourses.svg'
import { ReactComponent as MycoursesIcon } from '../../src/img/NavbarIcons/Folder.svg'
import { ReactComponent as ChatIcon } from '../../src/img/NavbarIcons/Comment.svg'
import { ReactComponent as ProfileIcon} from '../../src/img/NavbarIcons/User.svg'*/
import { Grid } from 'antd';
import AllCourses from './Courses/AllCourses';
import { Folder, Home, Comment, User, Starallcourses} from './icons';


const NavbarContainer = styled.div<{ isMobile: boolean }>`
    width: ${({ isMobile }) => isMobile ? '100svw' : '6svw'};
    height: ${({ isMobile }) => isMobile ? '10svh' : '100svh'};
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    min-width: 80px;
`

const NavbarContent = styled.div`
    height: 82%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${MobileBreakPoint}){
        flex-direction: row;
        width: 88%;
        height: fit-content;
    }
`

const NavbarTop = styled(NavbarContent)`
    height: 56%;
    width: 100%;
    max-height: 344px;
    @media (max-width: ${MobileBreakPoint}){
        height: fit-content;
    }
`

const NavbarLinkContainer = styled(Link) <{ selected: boolean }>`
    color: ${(props) => props.selected ? props.theme.colors.secondary : props.theme.colors.text};
    text-decoration: none;
    transition: color .1s ease-in-out;
    display: block;
    text-align: center;

    .navbar-icon {
        width: 32px;
        height: 32px;
    }

    span{
        display: block;
        ${responsiveText(14, 14, 9)}
    }
`

const NavbarLink = ({ to, selected, text, icon }: PropsWithChildren<{ to: string, selected: boolean, text: string, icon: any }>) => {

    return <NavbarLinkContainer to={to} selected={selected}>
        {icon}
        <span>{text}</span>
    </NavbarLinkContainer>
}
const navbarTopElements = [
    {
        icon: <Home className='navbar-icon'/>,
        link: MAIN_ROUTE,
        text: 'Главная'
    },
    {
        icon: <Starallcourses className='navbar-icon'/>,
        link: ALL_COURSES_ROUTE,
        text: 'Все курсы'
    },
    {
        icon: <Folder className='navbar-icon' />,
        link: MY_COURSES_ROUTE,
        text: 'Мои курсы'
    },
    {
        icon: <Comment className='navbar-icon'/>,
        link: CHAT_ROUTE,
        text: 'Поддержка'
    }
]
function Navbar() {

    const location = useLocation()
    const [basePath, setBasePath] = useState('')
    const orientation = useSelector((state: RootState) => state.orientation).orientation
    const screen=Grid.useBreakpoint()
    useEffect(() => {
        setBasePath('/' + location.pathname.split('/')[1])
    }, [location])

    const profileLink=<NavbarLink to={PROFILE_ROUTE} selected={PROFILE_ROUTE===basePath} icon={<User className='navbar-icon'/>} text='профиль'></NavbarLink>
    return (
        <NavbarContainer isMobile={screen.xs!}>
            <NavbarContent>
                <NavbarTop>
                    {
                        navbarTopElements.map(({ link, icon, text }) => <NavbarLink selected={link === basePath} key={link} to={link} icon={icon} text={text} />)
                    }
                    {screen.xs && profileLink}
                </NavbarTop>
                {!screen.xs && profileLink}
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar