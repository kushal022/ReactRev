import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h5>useReducer() Hook</h5>
        <div>
            <span>counter</span>
            <button onClick={()=>navigate('/hooks/useReducer/1')} >view</button>
        </div>
        <div>
            <span>SignUpForm</span>
            <button onClick={()=>navigate('/hooks/useReducer/2')} >view</button>
        </div>
    </div>
  )
}

export default About