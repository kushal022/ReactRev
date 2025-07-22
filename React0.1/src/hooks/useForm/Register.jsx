import React from 'react'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login';

const Register = () => {
    const [err, setErr] = React.useState("");
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm()

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data)
        const isExistingUser = JSON.parse(localStorage.getItem(data.email));
        if(isExistingUser) {
            console.log('User already exists');
            setErr("User already exists");
        }else{
            localStorage.setItem(data.email, JSON.stringify(data))
            console.log("User Registered Successfully", data)
            navigate("/hooks/useForm/login");
            setErr("");
        }
    }

  return (
    <div>
        <p>Register</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                {...register("name", { required: true })}
                placeholder='Name'
            />
            {errors.name && <span>*Name* is mandatory</span>}
            <input
                type='email'
                {...register("email", { required: true})}
                placeholder='Email'
            />
            {errors.email && <span>*Email* is mandatory</span>}
            <input
                type='password'
                {...register("password", { required: true})}
                placeholder='Password'
            />
            {errors.password && <span>*Password* is mandatory</span>}
            <input type="submit" />
        </form>
        <p style={{ color: 'red' }}>{err}</p>
        <p>Already have an account? <Link to="/hooks/useForm/login">Login</Link></p>
    </div>
  )
}

export default Register