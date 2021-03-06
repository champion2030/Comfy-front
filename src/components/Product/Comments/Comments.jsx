import React from 'react'
import s from "./Comments.module.css"
import Post from "./Post/Post"


const Comments = (props) => {
    let newPostElement = React.createRef();

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} key={post.id}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <footer className={s.footer}>

            <h3>COMMENTS</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add comment</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </footer>
    )

}

export default Comments;