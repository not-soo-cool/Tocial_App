import { Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"

const User = (props) => {
  return (
    <Link to={`/user/${props.userId}`} className='homeUser'>
      <img src={props.avatar} alt={props.username} />
      <Typography>{props.username}</Typography>
    </Link>
  )
}

export default User
