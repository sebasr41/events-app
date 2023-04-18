import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UserInfoScreen } from '../user/UserInfoScreen'
// import { SigninScreen } from '../signin/SigninScreen'
import { AuthScreen } from '../auths/AuthScreen'

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {currentUser
        ? (
          <UserInfoScreen />
          )
        : (
          <AuthScreen />
          )}
    </>

  )
}
