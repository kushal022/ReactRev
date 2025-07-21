import React from 'react'
import UserList from './UserList'

const AppUser = () => {
  return (
    <div>
        <UserList/>
    </div>
  )
}

export default AppUser


/*
🔍 Add search functionality (filter users by name)

🔃 Add a refresh button to re-fetch users

⏳ Add loading spinner instead of just text

❌ Show retry option on error

📄 Pagination (if API supports it)
 */