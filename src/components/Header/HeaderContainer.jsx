import React from "react";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import Header from "./Header";

class HeaderContainer extends React.Component {


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(HeaderContainer);

