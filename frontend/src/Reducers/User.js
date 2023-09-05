import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    // isAuthenticated: false,
    // loading:{},
    // error:{},
    // user:{}
}

// const stateRan = {}

const LoginRequest = createAction('LoginRequest');
const LoginSuccess = createAction('LoginSuccess');
const LoginFailure = createAction('LoginFailure');

const RegisterRequest = createAction('RegisterRequest');
const RegisterSuccess = createAction('RegisterSuccess');
const RegisterFailure = createAction('RegisterFailure');

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFailure = createAction('LoadUserFailure');

const LogoutUserRequest = createAction('LogoutUserRequest');
const LogoutUserSuccess = createAction('LogoutUserSuccess');
const LogoutUserFailure = createAction('LogoutUserFailure');

const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

const postOfFollowingRequest = createAction('postOfFollowingRequest');
const postOfFollowingSuccess = createAction('postOfFollowingSuccess');
const postOfFollowingFailure = createAction('postOfFollowingFailure');

const allUserRequest = createAction('allUserRequest');
const allUserSuccess = createAction('allUserSuccess');
const allUserFailure = createAction('allUserFailure');

const userProfileRequest = createAction('userProfileRequest');
const userProfileSuccess = createAction('userProfileSuccess');
const userProfileFailure = createAction('userProfileFailure');

const followUserRequest = createAction('followUserRequest');
const followUserSuccess = createAction('followUserSuccess');
const followUserFailure = createAction('followUserFailure');


export const userRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(LoginRequest, (state) => {
        state.loading = true;
    })
    .addCase(LoginSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;  
        state.isAuthenticated = true;
    })
    .addCase(LoginFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    })
    .addCase(RegisterRequest, (state) => {
        state.loading = true;
    })
    .addCase(RegisterSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(RegisterFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.isAuthenticated = false;
    })
    .addCase(LoadUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(LoadUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.isAuthenticated = false;
    })
    .addCase(LogoutUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(LogoutUserSuccess, (state) => {
        state.loading = false;
        state.user = null;  
        state.isAuthenticated = false;
    })
    .addCase(LogoutUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })

})



export const postOfFollowingReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(postOfFollowingRequest, (state) => {
        state.loading = true;
    })
    .addCase(postOfFollowingSuccess, (state, action) => {
        state.loading = false;
        state.posts = action.payload;  
    })
    .addCase(postOfFollowingFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })

})


export const allUserReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(allUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(allUserSuccess, (state, action) => {
        state.loading = false;
        state.users = action.payload;  
    })
    .addCase(allUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })

})

export const userProfileReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(userProfileRequest, (state) => {
        state.loading = true;
    })
    .addCase(userProfileSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;  
    })
    .addCase(userProfileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
})

export const followReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(followUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(followUserSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(followUserFailure, (state, action) => {
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


// const rootReducer = combineReducers({
//     user: userRedcuer,
//     posts: postOfFollowingReducer
// });

// export default rootReducer