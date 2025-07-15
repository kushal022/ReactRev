import React from 'react'

//Without memo function: this comp render every state change
// const Button = ({onClick}) => {
//     console.log('Button compo. render')
//   return (
//     <button onClick={onClick}>ClickMe</button>
//   )
// }

// Using memo function: component won't render until prop changes
// this is memoise function 
const Button = React.memo(({onClick}) => {
    console.log('Child render')
  return (
    <button onClick={onClick}>ClickMe</button>
  )
})

export default Button