import React from "react";
import preloader from "../../../images/load.gif";

let Preloader = (props) =>{
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt={"Preloader"}/>
    </div>
}

export default Preloader;