import { useState, useEffect, } from 'react'
import { getAuth} from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)
  const auth = getAuth()
  console.log(auth)
  useEffect(() => {
    console.log(auth.currentUser)
    setUser(auth)
  },[])
  return user ? <h1>{user.currentUser.email}</h1> : 'Not Logged In'
}

export default Profile