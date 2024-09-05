import { link } from 'fs';
import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ALL_COURSES_ROUTE, CHAT_ROUTE, MAIN_ROUTE, MY_COURSES_ROUTE, PROFILE_ROUTE } from '../utills/consts';

//<AiOutlineComment />
//<AiOutlineUser />
//<AiOutlineFolder />
//<AiOutlineStar />

//<AiOutlineHome />

const NavbarContainer = styled.div`
    width: 13%;
    height: 100%;
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
`

const NavbarTop = styled(NavbarContent)`
    height: 56%;
`

const NavbarLink = styled(Link) <{ selected: boolean }>`
    font-size:  3.7svw;
    color: ${(props) => props.selected ? props.theme.colors.secondary : props.theme.colors.text};
    text-decoration: none;
    transition: color .2s ease-in;

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
        <NavbarContainer>
            <NavbarContent>
                <NavbarTop>
                    {
                        navbarTopElements.map(({ link, icon }) => <NavbarLink selected={link===basePath} key={link} to={link}>{icon}</NavbarLink>)
                    }
                </NavbarTop>
                <NavbarLink to={PROFILE_ROUTE} selected={PROFILE_ROUTE===basePath}><AiOutlineUser /></NavbarLink>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar