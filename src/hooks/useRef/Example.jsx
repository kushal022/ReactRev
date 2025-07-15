import React, { useEffect, useRef, useState } from 'react';

//1. Accessing Dom element direct by useRef()
export function FocusInput() {
  const inputRef = useRef(null);
  const boxRef = useRef(null)

  const focusInput = () => {
    console.log(inputRef.current)
    inputRef.current.focus(); // Access DOM element directly
    
};

const handleClick = ()=>{
    console.log(boxRef.current)
    boxRef.current.style.border = 'black 1px solid'
    boxRef.current.style.color = 'red' // change color of div container/box

  }
  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={focusInput}>Focus the input</button>
      <div ref={boxRef}>hello</div>
      <button onClick={handleClick} >ClickMe</button>
    </div>
  );
}


//------------------ Timer -------------
export function Timer(){
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);

    const startTimer = ()=>{
        if(timerRef.current) return; //prevent multiple intervals
        //hold mutable values
        timerRef.current = setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
        console.log(timerRef.current)

    }

    const stopTimer = ()=>{
        clearInterval(timerRef.current);
        timerRef.current = null
    }
    return(
        <div>
            <p>Timer: {count}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}


//---------------- Track previous state --------------
export function Previous(){
    const [count, setCount] = useState(0);

    const prevCount = useRef();
    // const prevCount = useRef(0);
    // const prevCount = useRef(count);

    useEffect(()=>{
        prevCount.current = count;// track previous
    },[count])

    return(
        <div>
            <p>CurrentCount : {count}</p>
            <p>PrevCount : {prevCount.current}</p>
            <button onClick={()=>setCount(count+1)}>Inc</button>
        </div>
    )
}

//---------- Avoiding stale closures in async callbacks--------
/*
 Explanation:
Normally, closures “freeze” variable values at the time of function creation.

Using a ref, you always have the latest value inside an interval, promise, or event listener.
*/
export function LiveCounter(){
    const [count, setCount] = useState(0)
    const countRef = useRef(count)

    useEffect(()=>{
        countRef.current = count;
    },[count])

    useEffect(() => {
      const interval = setInterval(()=>{
        console.log('Current count: ', countRef.current)
      },2000)
    
      return () => clearInterval(interval)
      
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)} >inc</button>
        </div>
    )
    
}


//------- Click Outside to Close a Modal -----------
export function Modal({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div ref={modalRef} style={{ padding: 20, background: '#eee' }}>
      <h3>I'm a modal</h3>
      <p>Click outside to close me</p>
    </div>
  );
}


//------ Count Component Re-Renders ---------
export function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return <p>This component rendered {renderCount.current} times</p>;
}
