import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import ProductProfile from "./ProductProfile";
import {setProductsProfile} from "../../redux/comments-reducer";
import {withRouter} from "react-router-dom";

class ProductContainer extends React.Component {

    componentDidMount() {
        let productId = this.props.match.params.productId
        axios.get(`http://localhost:5000/comfy/main/${productId}`).then(response => {
                this.props.setProductsProfile(response.data)
            }
        )
    }

    render() {
        return <>
            <ProductProfile  {...this.props} profile={this.props.profile}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.commentsPage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProductContainer)

export default connect(mapStateToProps, {setProductsProfile})(WithUrlDataContainerComponent);

