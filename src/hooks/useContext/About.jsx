import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUseContext = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h5>useContext()</h5>
        <ol>
            <li>
                <span>ThemeSwitcher</span>
                <button onClick={()=>navigate('/hooks/useContext/1')}>View</button>
            </li>
        </ol>
    </div>
  )
}

export default AboutUseContext

//1. Create Context
//2. rap app with provider
//3. then use in components
// Syntax: 1. const value = useContext(MyContext)
//         2. const MyContext = React.createContext();