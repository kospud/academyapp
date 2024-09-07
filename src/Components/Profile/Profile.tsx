import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/userSlice'
import { Button } from 'antd';

function Profile() {

  const dispatch=useDispatch();

  const logoutFunc=()=>{
    localStorage.removeItem('user')
    dispatch(logout(undefined))
  }
  return (
    <div style={{height: '100%', width: '100%'}}>
      <Button style={{position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} size='large' onClick={()=>logoutFunc()}>Выйти</Button>
    </div>
  )
}

export default Profile