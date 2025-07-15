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
// import React, { useState, useEffect, useCallback } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   const tick = useCallback(() => {
//     setSeconds((s) => s + 1);
//   }, []); // no dependency, stays stable

//   useEffect(() => {
//     const interval = setInterval(tick, 1000);
//     return () => clearInterval(interval);
//   }, [tick]);

//   return <p>Timer: {seconds}s</p>;
// }


// export default Timer

//------------------- Multiple useCallback
// import React, { useState, useCallback } from 'react';

// function Calculator() {
//   const [number, setNumber] = useState(0);

//   const increment = useCallback(() => setNumber(n => n + 1), []);
//   const decrement = useCallback(() => setNumber(n => n - 1), []);
//   const reset = useCallback(() => setNumber(0), []);

//   return (
//     <div>
//       <p>Number: {number}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Calculator


//----------------------------------------------------

import React, { useState, useCallback } from 'react';

export const ExpensiveChild = React.memo(({ onAction }) => {
  console.log('ExpensiveChild rendered');
  // simulate heavy component
  for (let i = 0; i < 100000000; i++) {} // slow loop
  return <button onClick={onAction}>Do Something</button>;
});

function Dashboard() {
  const [value, setValue] = useState(0);

  const handleAction = useCallback(() => {
    console.log('Action triggered');
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue(v => v + 1)}>Update Value</button>
      <ExpensiveChild onAction={handleAction} />
    </div>
  );
}

export default Dashboard