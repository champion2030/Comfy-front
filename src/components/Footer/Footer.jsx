import React from 'react'
import s from "./Footer.module.css"
import Post from "./Post/Post"
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/footer-reducer";


const Footer = (props) => {
    let newPostElement = React.createRef();

    let postsElements = props.state.posts.map(post => <Post id={post.id} message={post.message}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return(
        <footer className={s.footer}>

            <h3>COMMENTS</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add comment</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </footer>
    )

}

export default Footer;