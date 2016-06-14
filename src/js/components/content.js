import React, { Component, PropTypes } from "react";
import TopNav from "./topnav.js";
import { connect } from 'react-redux';


class Content extends Component {
    render = () => {
        let page = '';
        if(this.props.path.indexOf('resume') != -1)
            page = 'resume';
        if(this.props.path.indexOf('project') != -1)
            page = 'projects';
        return <div>
            <TopNav user={this.props.user} page={page} />
            {this.props.children}
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        path: ownProps.location.pathname
    };
}

export default connect(mapStateToProps)(Content);
