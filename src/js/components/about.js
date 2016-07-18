import React, { Component, PropTypes } from "react";
import { Grid, Row, Col, Image} from 'react-bootstrap';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';


class About extends Component {
    render = () => <div>
        <Grid>
            <Row>
                <Col xs={4} md={3}>
                    <Image
                        rounded
                        src={this.props.user.image}
                        style={{width: 230, height: 230, display: 'block'}}/>
                    <h3>{this.props.user.name}</h3>
                    <h4>{this.props.user.title}</h4>
                    <hr/>
                    {this.props.user.emails.map((email) => {
                        return <h5><a href={"mailto:" + email}>{email}</a></h5>;
                    })}
                    <h5><a href={this.props.user.website}>{this.props.user.website}</a></h5>
                    <hr/>
                </Col>
                <Col xs={8} md={9}>
                    <h2>About Me</h2>
                    <Markdown source={this.props.user.about}/>
                </Col>
            </Row>
        </Grid>
    </div>
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(About);
