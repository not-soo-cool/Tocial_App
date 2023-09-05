import React, { useEffect } from 'react'
import './CommentCard.css'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCommentOnPost, getMyPosts } from '../../Actions/Post'
import { getFollowingPosts } from '../../Actions/User'
import { useAlert } from 'react-alert'

const CommentCard = ({
    userId,
    username,
    avatar,
    comment,
    commentId,
    postId,
    isAccount
}) => {

  const dispatch = useDispatch();

  const {user} = useSelector(state => state.user)

  const deleteCommentHandle = async() => {

    await dispatch(deleteCommentOnPost(postId, commentId));

    if(isAccount){
      dispatch(getMyPosts());
    }
    else{
      dispatch(getFollowingPosts());
    }

  }

  return (
    <div className='commentUser'>

        <Link to={`/user/${userId}`}>
            <img src={avatar} alt={username} />
            <Typography style={{ minWidth: "6vmax" }}>{username}</Typography>
        </Link>
        <Typography>
            {comment}
        </Typography>

        {
          isAccount ? ( 
            <Button onClick={deleteCommentHandle}>
              <Delete />
            </Button> 
          ) : userId===user._id ? (
            <Button onClick={deleteCommentHandle}>
              <Delete />
            </Button>
          ) : null
        }
      
    </div>
  )
}

export default CommentCard
