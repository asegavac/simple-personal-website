import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Content from "./components/content.js";
import About from "./components/about.js";
import Resume from "./components/resume.js";
import Projects from "./components/projects.js";
import Project from "./components/project.js";

import userReducer from "./reducers/user.js";
import projectsReducer from "./reducers/projects.js";

import "../scss/index.scss";

const store = createStore(
  combineReducers({
    routing: routerReducer,
    user: userReducer,
    projects: projectsReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Content}>
                <IndexRoute component={About}/>
                <Route path="resume" component={Resume}/>
                <Route path="projects" component={Projects}/>
                <Route path="project/:projId" component={Project}/>
            </Route>
        </Router>
    </Provider>, document.getElementById("content"));
