import React from 'react'
import { FocusInput } from './Example'
import { useNavigate } from 'react-router-dom'

const UseRef = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h4>useRef()</h4>
      <div>
        <span>Access Dom Element</span>
        <button onClick={()=>navigate('/hooks/useRef/1')}>view</button>
      </div>
      <div>
        <span>Store mutable value</span>
        <button onClick={()=>navigate('/hooks/useRef/2')}>view</button>
      </div>
      <div>
        <span>Track Previous State</span>
        <button onClick={()=>navigate('/hooks/useRef/3')}>view</button>
      </div>
      <div>
        <span>Avoiding stale closures in async callbacks</span>
        <button onClick={()=>navigate('/hooks/useRef/4')}>view</button>
      </div>
      <div>
        <span>Click Outside to Close a Modal</span>
        <button onClick={()=>navigate('/hooks/useRef/5')}>view</button>
      </div>
      <div>
        <span>Count Component Re-Renders</span>
        <button onClick={()=>navigate('/hooks/useRef/6')}>view</button>
      </div>
      <div>
        <span>Like Counter with Throttle Control</span>
        <button onClick={()=>navigate('/hooks/useRef/7')}>view</button>
      </div>
    </div>
  )
}

export default UseRef

/*
useRef is a React hook that gives you a mutable reference object. That means:

It doesn't cause a re-render when updated.

It holds a .current property that persists between renders.

syntax:
const ref = useRef(initialValue);


ref.current holds the value.

The value can be anything: DOM element, number, object, function, etc.



🔥 Main Use Cases
--> Accessing DOM elements

--> Keeping mutable values without causing re-renders

--> Storing values between renders (like instance variables in classes)

--> Debouncing, throttling, and timers

--> Tracking previous values
*/
