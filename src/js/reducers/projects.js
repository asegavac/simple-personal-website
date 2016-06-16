import { LOAD } from '../actions.js';

let default_state = []


export default function projects(state = default_state, action) {
    switch (action.type) {
    case LOAD:
        return action.data.projects;
    default:
        return state;
    }
}
