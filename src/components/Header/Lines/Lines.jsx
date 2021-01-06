import React from 'react'
import s from "./Lines.module.css"
import FirstLine from "./FirstLine/FirstLine";
import SecondLine from "./SecondLine/SecondLine";


const Lines = () => {
    return(
        <div className={s.lines}>
            <FirstLine/>
            <SecondLine/>
        </div>
    )
}

export default Lines;