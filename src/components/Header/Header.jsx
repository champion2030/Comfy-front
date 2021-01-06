import React from 'react'
import s from "./Header.module.css"
import Lines from "./Lines/Lines";


const Header = () => {
    return(
        <header className={s.header}>
            <Lines/>
        </header>
    )
}

export default Header;