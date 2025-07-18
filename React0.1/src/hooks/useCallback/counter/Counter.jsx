import React, { useCallback, useState } from 'react'
import Button from './Button'


const Counter = () => {
    const [count, setCount] = useState(0)

    //With Callback: Render only parent, when child's props change then it renders both
    //must use memo function in child function 
    // useCallback ensures the function updates only when it needs to.
    const handleCount = useCallback(()=>{
        console.log('Button Clicked')
        setCount(prev=>prev+1)
    },[])

    //Without useCallback(): render both parent and child
    // const handleCount = ()=>{
    //     console.log('Button Clicked')
    //     setCount(prev=>prev+1)
    // }

    const changeCount = ()=>{
        setCount(count+1)
    }
    console.log('Render Parent:  ',count)
  return (
    <div>
        <h5>{count}</h5>
        <Button onClick={handleCount} />
        <button onClick={changeCount} >ChangeCount</button>
    </div>
  )
}

export default Counter

