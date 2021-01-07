import React from 'react'
import s from "./NoteProduct.module.css"
import NoteItem from "./NoteItem/NoteItem";

const NoteProduct = (props) => {
    return(
        <div>
        <p>{props.title}</p>
        <div className={s.products}>
                <NoteItem id="1" name={props.first}/>
                <NoteItem id="2" name={props.second}/>
                <NoteItem id="3" name={props.third}/>
                <NoteItem id="4" name={props.fourth}/>
                <NoteItem id="5" name={props.fifth}/>
            </div>
        </div>
    )
}

export default NoteProduct;