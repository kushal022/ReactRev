import React from 'react'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h5>Redux</h5>
        <ol>
            <li>
                <span>Counter</span>
                <button onClick={()=>navigate('/counter')}>View</button>
            </li>
        </ol>
    </div>
  )
}

export default Layout