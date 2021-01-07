import React from 'react'
import s from "./Footer.module.css"
import Post from "./Post/Post"

const Footer = (props) => {
    let newPostElement = React.createRef();

    let postsElements = props.state.posts.map(post => <Post id={post.id} message={post.message}/>)

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return(
        <footer className={s.footer}>

            <h3>COMMENTS</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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