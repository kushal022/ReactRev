import React from 'react'
import Register from './Register'
import Login from './Login';

const FormApp = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

  return (
    <div>
        {user?
        <Welcome user={user}/>:<Login/>}
    </div>
  )
}

export default FormApp