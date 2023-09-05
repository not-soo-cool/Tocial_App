import React, { useEffect, useState } from 'react'
import './UpdateProfile.css'
import { Avatar, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { loadUser, registerUser, updateProfile } from '../../Actions/User';
import Loader from '../Loader/Loader';

const UpdateProfile = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    
    const {loading, error, user} = useSelector((state)=>state.user); 
    const {loading: updateLoading , error: updateError, message} = useSelector((state)=>state.like); 

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState("");
    const [avatarPrev, setAvatarPrev] = useState(user.avatar.url);
    const [username, setUsername] = useState(user.username);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        const reader = new FileReader();
        
        reader.onload = () => {
            // console.log(reader.readyState);
            if(reader.readyState===2){
                // console.log(reader.result);
                setAvatarPrev(reader.result);
                setAvatar(reader.result);
                // console.log(avatar);
            }
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        await dispatch(updateProfile(name, email, username, avatar));
        dispatch(loadUser());
    }

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch({type: "clearErrors"})
        }
        if(updateError){
            alert.error(updateError);
            dispatch({type: "clearErrors"})
        }
        if(message){
            alert.success(message);
            dispatch({type: "clearMessage"})
        }
      }, [alert, error, updateError, message, dispatch]);


  return (
    loading ? <Loader /> : (
        <div className='updateProfile'>
            <form className='updateProfileForm' onSubmit={submitHandler}>

                <Typography variant="h3">Social App</Typography>

                <Avatar 
                src={avatarPrev} 
                alt='User' 
                sx={{ height: "10vmax", width: "10vmax" }} />

                <input type='file' accept='image/*' onChange={handleImageChange}/>

                <input 
                type='text' 
                value={name} 
                placeholder='Name' 
                className='updateProfileInputs' 
                onChange={(e)=>setName(e.target.value)} />

                <input 
                type='email' 
                placeholder='Email' 
                className='updateProfileInputs' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} />

                <input 
                type='text' 
                placeholder="username" 
                className='updateProfileInputs' 
                // unique 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)} />

                <Button disabled={updateLoading} type='submit'>Update</Button>


            </form>
      
        </div>
    )
    
  )
}


export default UpdateProfile
