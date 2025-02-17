import React, { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { login, User } from '../store/userSlice'
import { useUserMeQuery } from '../generated-types'


function Auth({children}: PropsWithChildren) {

    const dispatch=useDispatch()

    const {data, loading, error}=useUserMeQuery()

    if(data){
        const userObject: User={
          firstname: data?.userMe.name,
          surname: data?.userMe.surname,
          mail: data?.userMe.email!,
          photo: ''
          
        }
        dispatch(login(userObject))
    }

  return (
    <>
    {!loading && children}
    </>
  )
}

export default Auth