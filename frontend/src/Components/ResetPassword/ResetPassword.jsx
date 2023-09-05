import React, { useEffect, useState } from 'react'
import './ResetPassword.css'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { resetPassword } from '../../Actions/User';
import { Button, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const ResetPassword = () => {
    
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {loading, error, message} = useSelector((state)=>state.like);
    
    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(resetPassword(params.token, newPassword, confirmPassword))
    }

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch({type: "clearErrors"})
        }
        if(message){
            alert.success(message);
            dispatch({type: "clearMessage"})
        }
      }, [alert, error, message, dispatch]);

  return (
    <div className='resetPassword'>
        <form className='resetPasswordForm' 
        onSubmit={submitHandler}>

            <Typography variant='h3' style={{ padding: "2vmax" }}>
                Social App
            </Typography>

            <input 
            type='password' 
            placeholder='Enter New Password' 
            required 
            className='resetPasswordInputs' 
            value={newPassword} 
            onChange={(e)=>setNewPassword(e.target.value)} 
            />

            <input 
            type='password' 
            placeholder='Confirm Password' 
            required 
            className='resetPasswordInputs' 
            value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)} 
            />

            <Link to="/">
                <Typography>
                    Login
                </Typography>
            </Link>
                <Typography>
                    Or
                </Typography>

            <Link to="/forgot/password">
                <Typography>
                    Request Another Token
                </Typography>
            </Link>

            <Button 
            disabled={loading} 
            type='submit'>Reset Password</Button>

        </form>
    </div>
  )
}

export default ResetPassword
