import React, { useEffect } from 'react'
import "./Home.css"
import User from '../User/User'
import Post from '../Posts/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getFollowingPosts, getallUsers } from '../../Actions/User'
import Loader from './../Loader/Loader'
import { Typography } from '@mui/material'
import { useAlert } from 'react-alert'

const Home = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {loading, posts, error} = useSelector(state => state.postOfFollowing);

  const {users, loading: usersLoading} = useSelector(state => state.allUsers);

  const {error: likeError, message} = useSelector(state => state.like);

  const {error: commentError, message: commentMsg} = useSelector(state => state.comment);

  const {error: deletecommentError, message: deletecommentMsg} = useSelector(state => state.deleteComment);

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getallUsers());
  }, [dispatch]);

  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch({type: "clearErrors"})
    }
    if(likeError){
        alert.error(likeError);
        dispatch({type: "clearErrors"})
    }
    if(commentError){
        alert.error(commentError);
        dispatch({type: "clearErrors"})
    }
    if(deletecommentError){
      alert.error(deletecommentError);
      dispatch({type: "clearErrors"})
    }
    if(deletecommentMsg){
        alert.success(deletecommentMsg);
        dispatch({type: "clearMessage"})
    }
    if(commentMsg){
        alert.success(commentMsg);
        dispatch({type: "clearMessage"})
    }
    if(message){
        alert.success(message);
        dispatch({type: "clearMessage"})
    }
  }, [alert, error, message, likeError, deletecommentMsg, commentMsg, deletecommentError, commentError, dispatch]);



  return (
    loading===true || usersLoading===true ? <Loader /> : (
      <div className='home'>

        <div className="homeleft">

          {
            posts && posts.length > 0 ? (
              posts.map((post) => (
                <Post 
                key={post._id}
                postId={post._id} 
                caption={post.caption} 
                postImage={post.image.url} 
                likes = {post.likes} 
                comments = {post.comments} 
                ownerImage = {post.owner.avatar.url}
                ownerName = {post.owner.username}
                ownerId = {post.owner._id} 
                // tab="home"
                />

              ))
            ) : ( 
              <Typography variant='h6'>No posts yet</Typography> 
            )
          }

        </div>
        <div className="homeright">
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
      
    </div>
    )
  )
}

export default Home
