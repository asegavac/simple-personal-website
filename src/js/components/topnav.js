import React, { Component, PropTypes } from "react";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';


export default class TopNav extends Component {
    render = () => {
        return <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{this.props.user.name}</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <li className={this.props.page == '' ? "active" : ""}>
                        <IndexLink to="/">About</IndexLink>
                    </li>
                    <li className={this.props.page == 'projects' ? "active" : ""}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={this.props.page == 'resume' ? "active" : ""}>
                        <Link to="/resume">Resume</Link>
                    </li>
                </Nav>
            </Navbar>
        </div>
    }
}

