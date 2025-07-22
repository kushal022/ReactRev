import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [err, setErr] = React.useState("");

    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm();

    const onSubmit = (data) => {
        const findUser = JSON.parse(localStorage.getItem(data.email));
        if(findUser && findUser.password === data.password){
            console.log("Login Successfully", findUser);
            localStorage.setItem('user', JSON.stringify(findUser));
            setErr("");
            navigate('/hooks/useForm/welcome');
        }else{
            console.log("Invalid Credentials")
            setErr("Invalid Credentials");
        }
    }

  return (
    <div>
        <p>Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="text" 
            {...register("email", { required: true})}
            placeholder='Email'
            />
            {errors.email && <span>Email is mandatory</span>}

            <input 
            type="text" 
            {...register("password", { required: true})}
            placeholder='Password'
            />
            {errors.password && <span>Password is mandatory</span>}
            <input type="submit" />
        </form>
        <p style={{ color: 'red' }}>{err}</p>
        <p>Don't have an account? <Link to="/hooks/useForm/register">Register</Link></p>
    </div>
  )
}

export default Login