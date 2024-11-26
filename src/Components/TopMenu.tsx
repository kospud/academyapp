import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components';
import { Page, PageBlock, PageBlockHeader, responsiveText, responsiveTextFixed } from './PageBlocks';
import { QuestionCircle, Setting } from './icons';
import { marginBottom, marginTop } from './Gaps';
import { HELP_ROUTE, MobileBreakPoint, SETTINGS_ROUTE } from '../utils/consts';
import { Link, useLocation } from 'react-router-dom';
import Search from '../Search';

const LeftMenuContainer = styled.div`
    display: flex;
    ${marginTop(36)}
    ${marginBottom(24)}
    position: relative;
    flex-grow: 1;

    z-index: 1;
`

const TopMenuItemElement = styled(Link) <{ selected: boolean }>`
    text-decoration: none;
    ${responsiveText(32, 32, 24)}
    color: ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.text};
    margin-left: 1.5em;

    @media (max-width: ${MobileBreakPoint}){
        margin-left: 0.7em;
    }
`

interface TopMenuItemProps {
    icon: JSX.Element,
    path: string,
    link?: boolean,
}
const TopMenuItem = ({ icon, path, link=true}: TopMenuItemProps) => {
    const location = useLocation()
    const [basePath, setBasePath] = useState('')

    useEffect(() => {
        setBasePath('/' + location.pathname.split('/')[1])
    }, [location])

    return link? <TopMenuItemElement to={path} selected={basePath === path} >
        {icon}
    </TopMenuItemElement> :
    <>
    {icon}
    </>

}

const TopMenuItems: TopMenuItemProps[] = [
    {
        icon: <Search/>,
        path: '',
        link: false
    },
    {
        icon: <QuestionCircle />,
        path: HELP_ROUTE,
    },
    {
        icon: <Setting />,
        path: SETTINGS_ROUTE
    }

]
function TopMenu() {

    const theme=useTheme()
    return (
        <div style={{ width: '100%', zIndex: 1, display: 'flex', justifyContent: 'center', position: 'absolute', left: 0, backgroundColor: theme.colors.secondary}}>
            <Page style={{position: 'relative', 
                display: 'flex', 
                flexDirection: 'row-reverse',
                alignItems: 'center',
                }}>
                <LeftMenuContainer>
                    {TopMenuItems.map(item => <TopMenuItem {...item} />)}
                </LeftMenuContainer>
            </Page>
        </div>
    )
}

export default TopMenu