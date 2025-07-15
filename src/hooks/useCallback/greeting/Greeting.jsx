// import { useCallback, useState } from "react"

// // useCallback() with dependencies
// const Greetings = ()=>{
//     const [name, setName] = useState('')

//     const sayHello = useCallback(()=>{
//         console.log('hello, ',name)
//     },[name])

//     // const sayHello = useCallback(()=>{
//     //     console.log('hello, ',name)
//     // },[])

//     // const sayHello = ()=>{
//     //     console.log('hello, ',name)
//     // }

//     return(
//         <div>
//             <input type="text" value={name} onChange={e=>setName(e.target.value)} />
//             <button onClick={sayHello}>click</button>
//             <div>
//                 <h5>{name&&name}</h5>
//             </div>
//         </div>
//     )
// }

// export default Greetings;

// --------------------------- Timer: 
import React, { useState, useEffect, useCallback } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  const tick = useCallback(() => {
    setSeconds((s) => s + 1);
  }, []); // no dependency, stays stable

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return <p>Timer: {seconds}s</p>;
}


export default Timer