import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styled, { css } from 'styled-components';
import { marginBottom, marginTop } from '../Gaps';
import { responsiveText } from '../PageBlocks';
import { Button } from 'antd';
import { logout } from '../../store/userSlice';
import { useLocation } from 'react-router-dom';

const UserInfoConatiner = styled.div`
    ${marginTop(90)};
    ${marginBottom(90)}
    display: flex;
    align-items: center;
`
const UserPhotoContainer = styled.div`
    background-color: ${props => props.theme.colors.text};
    width: 5svw;
    min-width: 80px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    color: ${props => props.theme.colors.secondary};
    ${responsiveText(40, 40, 30)};

`

const UserPhoto = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`

const UserInfoBlock = styled.div`
    
`

export const textstyle = css`
    display: block;
    color: ${props => props.theme.colors.text};
    ${responsiveText(18, 18, 14)}
    user-select: none;
`
const UserName = styled.a`
    ${textstyle}
    text-transform: uppercase;
    font-weight: 600;
`

const UserEmail = styled.a`
    ${textstyle}
    opacity: 0.5;
    ${marginBottom(12)}
`

const Change = styled.a`
    ${textstyle}
    cursor: pointer;
`
function UserInfo() {

    const location=useLocation()
    const user = useSelector((state: RootState) => state.user).user

    const changeClickHandler = () => {
        alert('Тут попап с изменением данных?')
    }

    const dispatch = useDispatch();

    const logoutFunc = () => {
        localStorage.removeItem('user')
        dispatch(logout(undefined))
    }
    return (
        <UserInfoConatiner>
            <UserPhotoContainer>
                {user?.photo ? <UserPhoto alt='userPhoto' src={user.photo} /> : <AiOutlineUser />}
            </UserPhotoContainer>
            <UserInfoBlock>
                <UserName>{user?.firstname + ' ' + (user?.surname ?? '')}</UserName>
                <UserEmail>{user?.mail}</UserEmail>
                <Change onClick={changeClickHandler}>Изменить</Change>
            </UserInfoBlock>
            <Button style={{ marginLeft: 20 }} onClick={() => {
                localStorage.removeItem('academy-token')
                dispatch(logout(undefined))
            

            }}>Выйти</Button>
        </UserInfoConatiner>
    )
}

export default UserInfo