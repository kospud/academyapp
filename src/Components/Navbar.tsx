import { link } from 'fs';
import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ALL_COURSES_ROUTE, CHAT_ROUTE, MAIN_ROUTE, MobileBreakPoint, MY_COURSES_ROUTE, PROFILE_ROUTE } from '../utills/consts';
import { isMobileOnly } from 'react-device-detect';

//<AiOutlineComment />
//<AiOutlineUser />
//<AiOutlineFolder />
//<AiOutlineStar />

//<AiOutlineHome />

const NavbarContainer = styled.div<{isMobile: boolean}>`
    width: ${({isMobile})=>isMobile? '100svw' : '13svw'};
    height: ${({isMobile})=>isMobile? '10svh' : '100svh'};
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
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

    @media (max-width: ${MobileBreakPoint}){
        height: fit-content;
    }
`

const NavbarLink = styled(Link) <{ selected: boolean }>`
    font-size:  3.7svw;
    color: ${(props) => props.selected ? props.theme.colors.secondary : props.theme.colors.text};
    text-decoration: none;
    transition: color .1s ease-in;

    @media (max-width: ${MobileBreakPoint}){
        font-size: 9svw;
    }

`

const navbarTopElements = [
    {
        icon: <AiOutlineHome />,
        link: MAIN_ROUTE
    },
    {
        icon: <AiOutlineStar />,
        link: ALL_COURSES_ROUTE
    },
    {
        icon: <AiOutlineFolder />,
        link: MY_COURSES_ROUTE
    },
    {
        icon: <AiOutlineComment />,
        link: CHAT_ROUTE
    }
]
function Navbar() {

    const location = useLocation()
    const [basePath, setBasePath]=useState('')

    
    useEffect(() => { 
        setBasePath('/'+location.pathname.split('/')[1])
    }, [location])

    return (
        <NavbarContainer isMobile={isMobileOnly}>
            <NavbarContent>
                <NavbarTop>
                    {
                        navbarTopElements.map(({ link, icon }) => <NavbarLink selected={link===basePath} key={link} to={link}>{icon}</NavbarLink>)
                    }
                    {isMobileOnly && <NavbarLink to={PROFILE_ROUTE} selected={PROFILE_ROUTE===basePath}><AiOutlineUser /></NavbarLink>}
                </NavbarTop>
                {!isMobileOnly && <NavbarLink to={PROFILE_ROUTE} selected={PROFILE_ROUTE===basePath}><AiOutlineUser /></NavbarLink>}
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar