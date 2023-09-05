import { configureStore } from "@reduxjs/toolkit";
import { allUserReducer, followReducer, postOfFollowingReducer, userProfileReducer, userRedcuer } from "./Reducers/User";
import { addcommentRedcuer, commentRedcuer, deleteCommentReducer, getMyPostsReducer, likeRedcuer, userPostsReducer } from "./Reducers/Post";


// const store = configureStore({
//     reducer: rootReducer,
// });


const store = configureStore({
    reducer: {
        user: userRedcuer,
        postOfFollowing: postOfFollowingReducer,
        allUsers: allUserReducer,
        like: likeRedcuer,
        comment: addcommentRedcuer,
        deleteComment: deleteCommentReducer,
        myPosts: getMyPostsReducer,
        userPosts: userPostsReducer,
        userProfile: userProfileReducer,
        followUser: followReducer
        // newPost: newPostReducer
    }
});


export default store