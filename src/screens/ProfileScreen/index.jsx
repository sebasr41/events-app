import { UserInfoScreen } from '../UserScreen'
import { AuthScreen } from '../AuthScreen'
import useCurrentUser from '../../hooks/useCurrentUser'

export const ProfileScreen = () => {
  const { currentUser } = useCurrentUser()

  return (
    currentUser
      ? <UserInfoScreen />
      : <AuthScreen />
  )
}
