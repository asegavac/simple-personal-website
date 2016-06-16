import { LOAD } from '../actions.js';

let default_state = {
    is_loading: true
}

export default function user(state = default_state, action) {
    switch (action.type) {
    case LOAD:
        return {
            is_loading: false,
            name: action.data.name,
            title: action.data.title,
            emails: action.data.emails,
            website: action.data.website,
            about: action.data.about,
            resume: action.data.resume,
            image: action.data.image
        }
    default:
        return state
    }
}
