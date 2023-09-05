import axios from "axios"

export const loginUser = (email, password) => async(dispatch) => {

    try {

        dispatch({
            type: "LoginRequest",
        });

        const {data} = await axios.post("/api/v1/login", {email, password}, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "LoginSuccess",
            payload: data.user
        })
        
    } catch (error) {

        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message
        })
        
    }

}

export const registerUser = (name, email, password, username, avatar) => async(dispatch) => {

    try {

        dispatch({
            type: "RegisterRequest",
        });

        const {data} = await axios.post("/api/v1/register", {name, email, password, username, avatar}, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "RegisterSuccess",
            payload: data.user
        })
        
    } catch (error) {

        dispatch({
            type: "RegisterFailure",
            payload: error.response.data.message
        }) 
    }
}


export const logoutUser = () => async(dispatch) => {

    try {

        dispatch({
            type: "LogoutUserRequest",
        });

        await axios.get("/api/v1/logout");

        // console.log(data);

        dispatch({
            type: "LogoutUserSuccess",
        })
        
    } catch (error) {

        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message
        })
        
    }

}

export const loadUser = () => async(dispatch) => {

    try {

        dispatch({
            type: "LoadUserRequest",
        });

        const {data} = await axios.get("/api/v1/me");

        // console.log(data);

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        })
        
    } catch (error) {

        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message
        })
    }
}


export const getFollowingPosts = () => async(dispatch) => {

    try {

        dispatch({
            type: "postOfFollowingRequest",
        });

        const {data} = await axios.get("/api/v1/posts");

        // console.log(data);

        dispatch({
            type: "postOfFollowingSuccess",
            payload: data.posts
        })
        
    } catch (error) {

        dispatch({
            type: "postOfFollowingFailure",
            payload: error.response.data.message
        }) 
    }
}


export const getallUsers = (name = "") => async(dispatch) => {

    try {

        dispatch({
            type: "allUserRequest",
        });

        const {data} = await axios.get(`/api/v1/users?name=${name}`);

        // console.log(data);

        dispatch({
            type: "allUserSuccess",
            payload: data.users
        })
        
    } catch (error) {

        dispatch({
            type: "allUserFailure",
            payload: error.response.data.message
        }) 
    }
}


export const updateProfile = (name, email, username, avatar) => async(dispatch) => {

    try {

        dispatch({
            type: "updateProfileRequest",
        });

        const {data} = await axios.put('/api/v1/update/profile', {
            name, email, username, avatar
        }, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "updateProfileSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "updateProfileFailure",
            payload: error.response.data.message
        })  
    }
}

export const updateMyPassword = (oldPassword, newPassword, confirmPassword) => async(dispatch) => {

    try {

        dispatch({
            type: "updatePasswordRequest",
        });

        const {data} = await axios.put('/api/v1/update/password', {
            oldPassword, newPassword, confirmPassword
        }, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "updatePasswordSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "updatePasswordFailure",
            payload: error.response.data.message
        })  
    }
}

export const deleteMyProfile = () => async(dispatch) => {

    try {

        dispatch({
            type: "deleteProfileRequest",
        });

        const {data} = await axios.delete('/api/v1/delete/me');

        // console.log(data);

        dispatch({
            type: "deleteProfileSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "deleteProfileFailure",
            payload: error.response.data.message
        })  
    }
}

export const forgotPassword = (email) => async(dispatch) => {

    try {

        dispatch({
            type: "forgotPasswordRequest",
        });

        const {data} = await axios.post('/api/v1/forgot/password', {
            email
        }, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "forgotPasswordSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "forgotPasswordFailure",
            payload: error.response.data.message
        })  
    }
}

export const resetPassword = (token, newPassword, confirmPassword) => async(dispatch) => {

    try {

        dispatch({
            type: "resetPasswordRequest",
        });

        const {data} = await axios.put(`/api/v1/password/reset/${token}`, {
            newPassword, confirmPassword
        }, {
            headers:{
                "Content-Type":"application/json"
            },
        });

        // console.log(data);

        dispatch({
            type: "resetPasswordSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        // console.log(error);
        dispatch({
            type: "resetPasswordFailure",
            payload: error.response.data.message
        })  
    }
}

export const getUserProfile = (id) => async(dispatch) => {

    try {

        dispatch({
            type: "userProfileRequest",
        });

        const {data} = await axios.get(`/api/v1/user/${id}`);

        // console.log(data);

        dispatch({
            type: "userProfileSuccess",
            payload: data.user,
        })
        
    } catch (error) {

        dispatch({
            type: "userProfileFailure",
            payload: error.response.data.message
        })  
    }
}

export const followAndUnfollowUser = (id) => async(dispatch) => {

    try {

        dispatch({
            type: "followUserRequest",
        });

        const {data} = await axios.get(`/api/v1/follow/${id}`);

        // console.log(data);

        dispatch({
            type: "followUserSuccess",
            payload: data.message,
        })
        
    } catch (error) {

        dispatch({
            type: "followUserFailure",
            payload: error.response.data.message
        })  
    }
}


