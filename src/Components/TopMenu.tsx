import React, { useEffect, useState } from 'react'
import { AiFillQuestionCircle } from "react-icons/ai";
import styled from 'styled-components';
import { responsiveText, responsiveTextFixed } from './PageBlocks';
import { QuestionCircle, Search, Setting } from './icons';
import { marginTop } from './Gaps';
import { HELP_ROUTE, MobileBreakPoint, SETTINGS_ROUTE } from '../utils/consts';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../store/store';

const LeftMenuContainer=styled.div`
    display: flex;
    ${marginTop(90)}
    position: absolute;
    top: 0;
    right: 5%;
    z-index: 1;

    @media (max-width:${MobileBreakPoint}){
        right: 6%;
    }
`

const TopMenuItemElement=styled(Link)<{selected: boolean}>`
    text-decoration: none;
    ${responsiveText(32,32,24)}
    color: ${({selected, theme})=>selected? theme.colors.primary : theme.colors.text};
    margin-left: 0.7em;

`
interface TopMenuItemProps{
    icon: JSX.Element,
    path: string
}
const TopMenuItem=({icon, path}: TopMenuItemProps)=>{
    const location = useLocation()
    const [basePath, setBasePath] = useState('')

    useEffect(() => {
        setBasePath('/' + location.pathname.split('/')[1])
    }, [location])

    return <TopMenuItemElement to={path} selected={basePath===path} >
        {icon} 
    </TopMenuItemElement>
    
}

const TopMenuItems: TopMenuItemProps[]=[
    {
        icon: <Search/>,
        path: ''
    },
    {
        icon: <QuestionCircle/>,
        path: HELP_ROUTE,
    },
    {
        icon: <Setting/>,
        path: SETTINGS_ROUTE
    }

]
function TopMenu() {
  return (
    <LeftMenuContainer>
        {TopMenuItems.map(item=><TopMenuItem {...item}/>)}
    </LeftMenuContainer>
  )
}

export default TopMenu