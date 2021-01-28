import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/footer-reducer";
import Footer from "./Footer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.footerPage.posts,
        newPostText: state.footerPage.newPostText
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

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;