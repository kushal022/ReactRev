import React from 'react'
import UseMemo1 from './useMemo/useMemo1'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Hooks = () => {
    const navigate = useNavigate()
  return (
    <div>
    <div><button onClick={()=>navigate('/')} >Home</button></div>
        <div>
            <span>useMemo()</span>
            {/* <Link to='useMemo' >view</Link> */}
            <button onClick={()=>navigate('/hooks/useMemo')} >view</button>
        </div>
        <div>
            <span>useCallback()</span>
            {/* <Link to='useCallback' >view</Link> */}
            <button onClick={()=>navigate('/hooks/useCallback')} >view</button>
        </div>
        <div>
            <span>useRef()</span>
            <button onClick={()=>navigate('/hooks/useRef')} >view</button>
        </div>
        {/* <Outlet/> */}
    </div>
  )
}

export default Hooks