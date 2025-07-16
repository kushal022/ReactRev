import React, { useReducer } from 'react'

//^ Reducer function:
export function formReducer(state,action){
    return {...state,[action.name]:action.value}
}

// FormSign up
const FormSignUP = () => {
    const [formState, dispatch] = useReducer(formReducer,{
        username:'',
        email:'',
        password:''
    })

    const handleChange = (e)=>{
        dispatch({name:e.target.name,value:e.target.value})
    }
  return (
    <div>
        <p>signup form</p>
        <input type="text"
            name='username'
            placeholder='username'
            onChange={handleChange} />
        <input type="email"
            name='email'
            placeholder='email'
            onChange={handleChange} />
        <input type="password"
            name='password'
            placeholder='password'
            onChange={handleChange} />

        <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  )
}

export default FormSignUP