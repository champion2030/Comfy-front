import React from 'react'
import s from "./Content.module.css"
import MyProducts from "./MyProducts/MyProducts.jsx";

const Content = () => {
    return(
        <main className={s.content}>

            <div>
                <MyProducts/>
            </div>

        </main>
    )
}

export default Content;