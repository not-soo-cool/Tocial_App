import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    // isAuthenticated: false,
    // loading:{},
    // error:{},
    // user:{}
}


const LikeRequest = createAction('LikeRequest');
const LikeSuccess = createAction('LikeSuccess');
const LikeFailure = createAction('LikeFailure');

const addCommentRequest = createAction('addCommentRequest');
const addCommentSuccess = createAction('addCommentSuccess');
const addCommentFailure = createAction('addCommentFailure');

const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

const deleteCommentRequest = createAction('deleteCommentRequest');
const deleteCommentSuccess = createAction('deleteCommentSuccess');
const deleteCommentFailure = createAction('deleteCommentFailure');

const newPostRequest = createAction('newPostRequest');
const newPostSuccess = createAction('newPostSuccess');
const newPostFailure = createAction('newPostFailure');

const updateCaptionRequest = createAction('updateCaptionRequest');
const updateCaptionSuccess = createAction('updateCaptionSuccess');
const updateCaptionFailure = createAction('updateCaptionFailure');

const getMyPostsRequest = createAction('getMyPostsRequest');
const getMyPostsSuccess = createAction('getMyPostsSuccess');
const getMyPostsFailure = createAction('getMyPostsFailure');

const userPostsRequest = createAction('userPostsRequest');
const userPostsSuccess = createAction('userPostsSuccess');
const userPostsFailure = createAction('userPostsFailure');

const deleteMyPostRequest = createAction('deleteMyPostRequest');
const deleteMyPostSuccess = createAction('deleteMyPostSuccess');
const deleteMyPostFailure = createAction('deleteMyPostFailure');

const updateProfileRequest = createAction('updateProfileRequest');
const updateProfileSuccess = createAction('updateProfileSuccess');
const updateProfileFailure = createAction('updateProfileFailure');

const updatePasswordRequest = createAction('updatePasswordRequest');
const updatePasswordSuccess = createAction('updatePasswordSuccess');
const updatePasswordFailure = createAction('updatePasswordFailure');

const deleteProfileRequest = createAction('deleteProfileRequest');
const deleteProfileSuccess = createAction('deleteProfileSuccess');
const deleteProfileFailure = createAction('deleteProfileFailure');

const forgotPasswordRequest = createAction('forgotPasswordRequest');
const forgotPasswordSuccess = createAction('forgotPasswordSuccess');
const forgotPasswordFailure = createAction('forgotPasswordFailure');

const resetPasswordRequest = createAction('resetPasswordRequest');
const resetPasswordSuccess = createAction('resetPasswordSuccess');
const resetPasswordFailure = createAction('resetPasswordFailure');

// const followUserRequest = createAction('followUserRequest');
// const followUserSuccess = createAction('followUserSuccess');
// const followUserFailure = createAction('followUserFailure');


export const likeRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(LikeRequest, (state) => {
        state.loading = true;
    })
    .addCase(LikeSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(LikeFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(newPostRequest, (state) => {
        state.loading = true;
    })
    .addCase(newPostSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(newPostFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(updateCaptionRequest, (state) => {
        state.loading = true;
    })
    .addCase(updateCaptionSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(updateCaptionFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(deleteMyPostRequest, (state) => {
        state.loading = true;
    })
    .addCase(deleteMyPostSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(deleteMyPostFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(updateProfileRequest, (state) => {
        state.loading = true;
    })
    .addCase(updateProfileSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(updateProfileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(updatePasswordRequest, (state) => {
        state.loading = true;
    })
    .addCase(updatePasswordSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(updatePasswordFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(deleteProfileRequest, (state) => {
        state.loading = true;
    })
    .addCase(deleteProfileSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(deleteProfileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(forgotPasswordRequest, (state) => {
        state.loading = true;
    })
    .addCase(forgotPasswordSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(forgotPasswordFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(resetPasswordRequest, (state) => {
        state.loading = true;
    })
    .addCase(resetPasswordSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(resetPasswordFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    // .addCase(followUserRequest, (state) => {
    //     state.loading = true;
    // })
    // .addCase(followUserSuccess, (state, action) => {
    //     state.loading = false;
    //     state.message = action.payload;  
    // })
    // .addCase(followUserFailure, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload; 
    // })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;  
    })

})


export const addcommentRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(addCommentRequest, (state) => {
        state.loading = true;
    })
    .addCase(addCommentSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(addCommentFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;  
    })

})



export const deleteCommentReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(deleteCommentRequest, (state) => {
        state.loading = true;
    })
    .addCase(deleteCommentSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(deleteCommentFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;  
    })
})


export const getMyPostsReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(getMyPostsRequest, (state) => {
        state.loading = true;
    })
    .addCase(getMyPostsSuccess, (state, action) => {
        state.loading = false;
        state.posts= action.payload;  
    })
    .addCase(getMyPostsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })

})

export const userPostsReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(userPostsRequest, (state) => {
        state.loading = true;
    })
    .addCase(userPostsSuccess, (state, action) => {
        state.loading = false;
        state.posts= action.payload;  
    })
    .addCase(userPostsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })

})



// const rootReducer = combineReducers({
//     user: userRedcuer,
//     posts: postOfFollowingReducer
// });

// export default rootReducer