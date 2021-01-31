import React from "react";
import Preloader from "../../common/Preloader/Preloader";


let ProductsInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>

            <h1>MAIN INFO</h1>
            <img src={props.profile.photo}/>

        </div>
    )
}

export default ProductsInfo;