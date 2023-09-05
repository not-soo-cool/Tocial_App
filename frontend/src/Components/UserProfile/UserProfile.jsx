import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../../Actions/Post';
import Loader from '../Loader/Loader';
import Post from '../Posts/Post';
import { Avatar, Button, Dialog, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import User from '../User/User';
import { followAndUnfollowUser, getUserProfile } from '../../Actions/User';


const UserProfile = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams();

    const {user, loading: userLoading, error: userProfileError} = useSelector(state => state.userProfile)

    const { user: me } = useSelector(state => state.user)

    const {loading, posts, error} = useSelector((state) => state.userPosts)

    const {error: followError, message, loading: followLoading} = useSelector(state => state.followUser);

    const {error: likeError, message: likeMessage, loading: likeLoading} = useSelector(state => state.like);

    const [followersToggle, setFollowersToggle] = useState(false);
    const [followingToggle, setFollowingToggle] = useState(false);

    const [following, setFollowing] = useState(false);
    const [myProfile, setMyProfile] = useState(false);

    const followHandler = async(e) => {
        // e.preventDefault();
        setFollowing(!following)

        await dispatch(followAndUnfollowUser(params.id))
        dispatch(getUserProfile(params.id))
    }


    useEffect(() => {
        dispatch(getUserPosts(params.id))
        dispatch(getUserProfile(params.id))

      }, [dispatch, params.id]);

    useEffect(() => {
        if(me._id===params.id){
            setMyProfile(true);
        }

        if(user){
            user.followers.forEach((item) => {
                if(item._id===me._id){
                    setFollowing(true);
                } else {
                    setFollowing(false);
                }
            });
        }

      }, [params.id, me._id, user]);

      useEffect(() => {
        if(error){
            alert.error(error);
            dispatch({type: "clearErrors"})
        }
        if(followError){
            alert.error(followError);
            dispatch({type: "clearErrors"})
        }
        if(userProfileError){
            alert.error(userProfileError);
            dispatch({type: "clearErrors"})
        }
        if(likeError){
            alert.error(likeError);
            dispatch({type: "clearErrors"})
        }
        if(message){
            alert.success(message);
            dispatch({type: "clearMessage"})
        }
        if(likeMessage){
            alert.success(likeMessage);
            dispatch({type: "clearMessage"})
        }
      }, [alert, error, message, likeMessage, followError, likeError, userProfileError, dispatch]);

  return (
    loading===true || userLoading===true ? (
        <Loader /> 
    ) : (
        <div className='account'>
            <div className="accountleft">
                {
                    posts && posts.length > 0 ? (
                    posts.map(post => (
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
                        isAccount = {myProfile}
                        isDelete = {myProfile}
                        // tab='userProfile'
                        /> 
                    ))
                    ) : ( 
                    <Typography variant='h6'>User has no posts to show</Typography> 
                    )
                }
            </div>
            <div className="accountright">

                {
                    user && ( 
                    <>
                        <Avatar 
                    src={user.avatar.url}
                    sx={{ height: "8vmax", width: "8vmax"}} 
                />

                <Typography variant='h5'>
                    {user.username}
                </Typography>

                <div>
                    <Button onClick={()=>setFollowersToggle(!followersToggle)}>
                        <Typography>
                            Followers
                        </Typography>
                    </Button>
                        <Typography>
                            {user.followers.length}
                        </Typography>
                </div>

                <div>
                    <Button onClick={()=>setFollowingToggle(!followingToggle)}>
                        <Typography>
                            Following
                        </Typography>
                    </Button>
                        <Typography>
                            {user.following.length}
                        </Typography>
                </div>


                <div>
                    <Typography>
                        Posts
                    </Typography>
                
                    <Typography>
                        {user.posts.length}
                    </Typography>
                </div>

                {
                    myProfile ? null : (
                    <Button 
                        variant='contained' 
                        style={{ background: following?"black":"aqua"}} onClick={followHandler} 
                        disabled={followLoading}

                    >
                        {following ? "Unfollow" : "Follow"}
                </Button>)
                }
                    </>    
                    )
                }
                

                <Dialog 
                    open={followersToggle} 
                    onClose={()=>setFollowersToggle(!followersToggle)} >

                        <div className="DialogBox">
                            <Typography variant='h4' >Followers</Typography>

                            {
                                user && user.followers.length > 0 ? (
                                    user.followers.map((follower)=>(
                                        <User 
                                        key={follower._id}
                                        userId={follower._id} 
                                        username={follower.username} 
                                        avatar={follower.avatar.url} />
                                    ))
                                ) : (
                                    <Typography style={{ margin: "2vmax" }} >You have no followers</Typography>
                                )
                            }
                        </div>
                </Dialog>

                <Dialog 
                    open={followingToggle} 
                    onClose={()=>setFollowingToggle(!followingToggle)} >

                        <div className="DialogBox">
                            <Typography variant='h4' >Following</Typography>

                            {
                                user && user.following.length > 0 ? (
                                    user.following.map((follow)=>(
                                        <User 
                                        key={follow._id}
                                        userId={follow._id} 
                                        username={follow.username} 
                                        avatar={follow.avatar.url} />
                                    ))
                                ) : (
                                    <Typography style={{ margin: "2vmax" }} >You don't follow anyone</Typography>
                                )
                            }
                        </div>
                </Dialog>

            </div>
        </div> 
    )
  )
}

export default UserProfile
