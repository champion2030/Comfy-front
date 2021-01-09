const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts : [
        {id: "1", message: "Nice site"},
        {id: "2", message: "Bad view"},
        {id: "3", message: "Lenovo is the best"},
        {id: "4", message: "Nice computer"},
        {id: "5", message: "Nice day"}
    ],
    newPostText : "new-text"
}

const footerReducer  = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
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

export default footerReducer;