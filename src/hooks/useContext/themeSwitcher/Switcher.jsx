import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Switcher = () => {
  const {theme, toggle} = useContext(ThemeContext)
  return (
    <div>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggle} >Toggle Theme</button>
    </div>
  )
}

export default Switcher