import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Home</h1>
        <div className="box">
            <span>Hooks --- </span>
            <button onClick={()=>navigate('/hooks')}>Visit</button>
        </div>
        <div className="box">
            <span>Todo --- </span>
            <button onClick={()=>navigate('/todo')}>Visit</button>
        </div>
        <div className="box">
            <span>Tic Tac Toe --- </span>
            <button onClick={()=>navigate('/tictactoe')}>Visit</button>
        </div>
        <div className="box">
            <span>SmartTextLogger --- </span>
            <button onClick={()=>navigate('/textLogger')}>Visit</button>
        </div>
    </div>
  )
}

export default Home