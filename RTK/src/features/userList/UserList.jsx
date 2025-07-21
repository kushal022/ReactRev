import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUserThunk } from './userThunk'

const UserList = () => {
  const {users, loading, error} = useSelector(state=> state.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUserThunk())
  },[dispatch])
  // console.log(users)

  if(loading) return (<p>Loading...</p>)
  if(error) return(<p>{error}</p>)
  return (
    <div>
      {users && users.map((user)=>(
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>UserName: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </li>
      ))}
    </div>
  )
}

export default UserList