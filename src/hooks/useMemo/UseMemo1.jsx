import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseMemo1 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h4>useMemo():--</h4>
      <div>
        <span>1. Expensive calculation</span>
        <button onClick={()=>navigate('/hooks/useMemo/1')}>View</button>
      </div>
      <div>
        <span>2. Memoized Derived Value: Filter Items</span>
        <button onClick={()=>navigate('/hooks/useMemo/2')}>View</button>
      </div>
      <div>
        <span>3. Memoizing Props for a React.memo Child</span>
        <button onClick={()=>navigate('/hooks/useMemo/3')}>View</button>
      </div>
    </div>
  )
}

export default UseMemo1

//& useMemo() is a React Hook that memoizes the result of a calculation.
//& ✅ It prevents expensive computations from being re-run unless their inputs change.
//& Syntax: const memoizedValue = useMemo(() => computeSomething(a, b), [a, b]);
//It runs computeSomething only if a or b change.
// It returns the cached result if dependencies don’t change.

//^| Use Case                                       | Why Use `useMemo()`                           |
//| ---------------------------------------------- | --------------------------------------------- |
//| Expensive calculations                         | Avoid re-running them unnecessarily           |
//| Derived values from state or props             | Avoid recalculating on every render           |
//| Prevent re-renders in deeply nested components | Memoize props passed to `React.memo` children |

