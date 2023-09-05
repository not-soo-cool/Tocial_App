import React, { useState } from 'react'
import "./Search.css"
import { Avatar, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getallUsers } from '../../Actions/User';
import User from '../User/User';

const Search = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const {users, loading} = useSelector(state => state.allUsers);

    const submitHandler = async(e) => {
        e.preventDefault();
        await dispatch(getallUsers(name));
        // dispatch(loadUser());
    }

  return (
    <div className='search'>
            <form className='searchForm' onSubmit={submitHandler}>

                <Typography variant="h3">Social App</Typography>

                <Avatar 
                // src={avatarPrev} 
                alt='User' 
                sx={{ height: "10vmax", width: "10vmax" }} />

                {/* <input type='file' accept='image/*' onChange={handleImageChange}/> */}

                <input 
                type='text' 
                value={name} 
                placeholder='Name' 
                // className='searchInputs' 
                onChange={(e)=>setName(e.target.value)} />

                {/* <input 
                type='email' 
                placeholder='Email' 
                // className='searchInputs' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} /> */}

                {/* <input 
                type='text' 
                placeholder="username" 
                className='searchInputs' 
                // unique 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)} /> */}

                <Button 
                disabled={loading} 
                type='submit'>Search</Button>

            <div className="searchResult">

            {
                users && users.length > 0 ? (
                users.map((user) => (
                    <User
                    key={user._id}
                    userId={user._id} 
                    username={user.username} 
                    avatar={user.avatar.url} 
                    />
                ))
                ) : (
                <Typography variant='h6'>No users yet</Typography>    
                )
            }


            </div>

            </form>

      
        </div>
  )
}

export default Search
