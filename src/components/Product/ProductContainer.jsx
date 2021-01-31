import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import ProductProfile from "./ProductProfile";
import {setProductsProfile} from "../../redux/comments-reducer";

class ProductContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:5000/comfy/main/5`).then(response => {
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

export default connect(mapStateToProps, {
    setProductsProfile
})(ProductContainer);

