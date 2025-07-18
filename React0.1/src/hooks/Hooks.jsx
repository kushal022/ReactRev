import React from 'react'
import UseMemo1 from './useMemo/useMemo1'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Hooks = () => {
    const navigate = useNavigate()
  return (
    <div>
    <div><button onClick={()=>navigate('/')} >Home</button></div>
    <ol>
        <li>
            <span>useMemo()</span>
            {/* <Link to='useMemo' >view</Link> */}
            <button onClick={()=>navigate('/hooks/useMemo')} >view</button>
        </li>
        <li>
            <span>useCallback()</span>
            {/* <Link to='useCallback' >view</Link> */}
            <button onClick={()=>navigate('/hooks/useCallback')} >view</button>
        </li>
        <li>
            <span>useRef()</span>
            <button onClick={()=>navigate('/hooks/useRef')} >view</button>
        </li>
        <li>
            <span>useReducer()</span>
            <button onClick={()=>navigate('/hooks/useReducer')} >view</button>
        </li>
        <li>
            <span>useContext()</span>
            <button onClick={()=>navigate('/hooks/useContext')} >view</button>
        </li>
    </ol>
        {/* <Outlet/> */}
    </div>
  )
}

export default Hooks