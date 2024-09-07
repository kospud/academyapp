import React, { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'

function Auth({children}: PropsWithChildren) {

    const dispatch=useDispatch()

    const user=localStorage.getItem('user')

    if(user){
        const userObject=JSON.parse(user)
        dispatch(login(userObject))
    }

  return (
    <>
    {children}
    </>
  )
}

export default Auth