const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PRODUCT_PROFILE = 'SET_PRODUCT_PROFILE';

let initialState = {
    posts : [
        {id: "1", message: "Nice site"},
        {id: "2", message: "Bad view"},
        {id: "3", message: "Lenovo is the best"},
        {id: "4", message: "Nice computer"},
        {id: "5", message: "Nice day"}
    ],
    newPostText : "new-text",
    profile: null
}

const commentsReducer  = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: "6",
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_PRODUCT_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return{
        type: UPDATE_NEW_POST,
        newText: text
    }
}

export const setProductsProfile = (profile) => ({type: SET_PRODUCT_PROFILE, profile})

export default commentsReducer;