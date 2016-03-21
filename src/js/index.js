import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import "../scss/index.scss";


/**
 * Example component
 */
class HelloHeader extends Component {
    static propTypes = {
        name: PropTypes.string
    }

    static defaultProps = {
        name: "World"
    }

    render = () => <div id="header">
        <h1>{`Hello, ${this.props.name}!`}</h1>
    </div>
}


render(<HelloHeader />, document.getElementById("content"));
