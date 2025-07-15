import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseCallback = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h5>useCallback()</h5>
        <div>
            <span>Filter Bar</span>
            <button onClick={()=>navigate('/hooks/useCallback/filterBar')} >View</button>
        </div>
        <div>
            <span>Counter</span>
            <button onClick={()=>navigate('/hooks/useCallback/counter')} >View</button>
        </div>
        <div>
            <span>Greeting</span>
            <button onClick={()=>navigate('/hooks/useCallback/Greeting')} >View</button>
        </div>
    </div>
  )
}

export default UseCallback