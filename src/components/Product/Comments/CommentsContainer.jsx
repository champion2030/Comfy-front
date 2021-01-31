import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/comments-reducer";
import Comments from "./Comments";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.commentsPage.posts,
        newPostText: state.commentsPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;