import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';


export default class Resume extends Component {
    render = () => <div className="container">
        <h2>Resume</h2>
        <iframe
            width="100%"
            height="700px"
            src={this.props.user.resume}>
        </iframe>
    </div>
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Resume);
