import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './layout/Layout'
import Counter from './features/counter/Counter'
import Todo from './features/todos/Todo'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/todo' element={<Todo/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App