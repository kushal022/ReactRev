import { useCallback, useEffect, useRef, useState } from "react";

function SmartTextareaLogger(){
  const [text, setText] = useState('');
  const timeoutRef = useRef(null);      // holds debounce timer
  const renderCount = useRef(1);        // track renders
  const inputRef = useRef(null);        // focus input on mount
  const lastLogged = useRef('');        // store last logged value

  //todo.3: It tracks how many times the component re-rendered.
  // Update render count
  renderCount.current+=1

  // Handle input changes and debounce logging
  const handleChange = (e)=>{
    const newText = e.target.value;
    setText(newText)

    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(()=>{
      texLog()
    },2000)
  }

  //todo.1: A textarea that focuses automatically when the page loads.
  // Focus input on mount
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  //todo.2: It logs (prints to console) what you typed — but only after you stop typing for 1 second (this is called debouncing).
  //
  //todo.4: It shows the last logged message.
  // Debounced log function
  const texLog = useCallback(()=>{
    console.log('Logged: ',text)
    lastLogged.current=text;
  },[text])

  return(
    <div>
      <p>Text</p>
      <textarea 
        ref={inputRef}
        cols='20'
        rows='4'
        value={text}
        onChange={(e)=>handleChange(e)}
        id=""/>
        <p>Last Logged: {lastLogged.current}</p>
        <p>Component Rendered: {renderCount.current} times</p>
    </div>
  )
}

export default SmartTextareaLogger;