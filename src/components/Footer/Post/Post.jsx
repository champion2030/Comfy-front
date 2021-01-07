import React from 'react'
import s from "./Post.module.css"

const Post = (props) => {
    return(
        <div>
            <div>{props.message}</div>
        </div>
    )
}

export default Post;