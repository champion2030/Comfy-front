import React from 'react'
import NoteProduct from "./NoteProduct/NoteProduct";

const Notebook = (props) => {
    let noteElements = props.noteData
        .map(product => <NoteProduct title={product.title} first={product.first} second={product.second} third={product.third} fourth={product.fourth} fifth={product.fifth}/>)

    return(
        <div>
            {noteElements}
        </div>
    )
}

export default Notebook;