import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/userSlice'
import { Button } from 'antd';
import { Page, PageBlock, PageBlockHeader } from '../PageBlocks';
import { RootState } from '../../store/store';
import UserInfo from './UserInfo';
import UserActivity from './UserActivity';
import UserBonuses from './UserBonuses';
import UserFiles from './UserFiles';

function Profile() {

  
  const dispatch=useDispatch();

  const logoutFunc=()=>{
    localStorage.removeItem('user')
    dispatch(logout(undefined))
  }
  return (
    <Page>
      <PageBlock>
        <PageBlockHeader marginTop={90}>Профиль</PageBlockHeader>
        <UserInfo/>
        <UserActivity/>
        <UserBonuses/>
        <UserFiles/>
      </PageBlock>
      
    </Page>
  )
}

export default Profile