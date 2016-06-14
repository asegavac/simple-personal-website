import React, { Component, PropTypes } from "react";
import { Media, Thumbnail, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';

class Projects extends Component {
    render = () => {
        let project_list = this.props.projects.map((project) => {
            return <Media key={project.id}>
                <Media.Left>
                    <Image
                        rounded
                        src={project.thumb}
                        style={{width: 120, height: 120, display: 'block'}}/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading><Link to={"/project/"+project.id}>{project.name}</Link></Media.Heading>
                    <Markdown source={project.blurb}/>
                </Media.Body>
            </Media>;
        });
        return <div className="container">
            {project_list}
        </div>;
    }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects);
