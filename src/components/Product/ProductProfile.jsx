import React from "react";
import ProductsInfo from "./ProductInfo/ProductsInfo";
import CommentsContainer from "./Comments/CommentsContainer";

const ProductProfile = (props) => {
    return (
        <div>
            <ProductsInfo profile={props.profile}/>
            <CommentsContainer/>
        </div>
    )
}

export default ProductProfile;

