import React, { Component, PropTypes } from "react";
import { Media, Thumbnail, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';

class Project extends Component {
    render = () => {
        console.log(this.props);
        return <div className="container">
            <h2>{this.props.project.name}</h2>
            <Image
                src={this.props.project.image}
                style={{width: 230, height: 230, display: 'block'}}/>
            <Markdown source={this.props.project.text}/>
        </div>;
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects.filter((project) => {
        console.log(project);
        console.log(ownProps);
        if(project.id == ownProps.routeParams.projId)
            return true;
        return false;
    })[0]
  }
}

export default connect(mapStateToProps)(Project);
