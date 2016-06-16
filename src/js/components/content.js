import React, { Component, PropTypes } from "react";
import { ProgressBar } from 'react-bootstrap';
import TopNav from "./topnav.js";
import { connect } from 'react-redux';
import { load, query } from '../actions.js';


class Content extends Component {
    componentDidMount = () => {
        query(this.props.load);
    }
    render = () => {
        if(this.props.user.is_loading){
            return <div style={{'margin-left': '40%', width: '20%', 'margin-top': '200px'}}>
                <h5>Loading</h5>
                <ProgressBar>
                    <ProgressBar
                        active
                        now={100} />
                    </ProgressBar>
            </div>;
        }
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

const mapDispatchToProps = (dispatch) => {
    return {
        load: (data) => {
            dispatch(load(data))
        }
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        path: ownProps.location.pathname
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
