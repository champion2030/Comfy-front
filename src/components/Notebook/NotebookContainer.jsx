import React from 'react'
import {connect} from "react-redux";
import Notebook from "./Notebook";

let mapStateToProps = (state) => {
    return{
        noteData: state.notePage.noteData
    }
}

const NotebookContainer = connect(mapStateToProps)(Notebook);

export default NotebookContainer;