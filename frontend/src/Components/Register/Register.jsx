import React, { useEffect, useState } from 'react'
import './Register.css'
import { Avatar, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { registerUser } from '../../Actions/User';

const Register = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const {loading, error} = useSelector((state)=>state.user)
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        const reader = new FileReader();
        
        reader.onload = () => {
            // console.log(reader.readyState);
            if(reader.readyState===2){
                // console.log(reader.result);
                setAvatar(reader.result);
                console.log(avatar);
            }
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password, username, avatar));
    }

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch({type: "clearErrors"})
        }
      }, [alert, error, dispatch]);


  return (
    <div className='register'>
        <form className='registerForm' onSubmit={submitHandler}>

            <Typography variant="h3">Social App</Typography>

            <Avatar 
            src={avatar} 
            alt='User' 
            sx={{ height: "10vmax", width: "10vmax" }} />

            <input type='file' accept='image/*' onChange={handleImageChange}/>

            <input 
            type='text' 
            value={name} 
            required 
            placeholder='Name' 
            className='registerInputs' 
            onChange={(e)=>setName(e.target.value)} />

            <input 
            type='email' 
            placeholder='Email' 
            className='registerInputs' 
            required 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} />

            <input 
            type='password' 
            placeholder='Password' 
            className='registerInputs' 
            required 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} />

            <input 
            type='text' 
            placeholder="username" 
            className='registerInputs' 
            required 
            // unique 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)} />

            <Link to="/" >
                <Typography>
                    Already Signed Up? Login Now
                </Typography>
            </Link>

            <Button disabled={loading} type='submit'>Sign Up</Button>


        </form>
      
    </div>
  )
}

export default Register
