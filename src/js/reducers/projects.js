let default_state = [
    {
        id: 1,
        name: 'project 1',
        image: 'https://avatars1.githubusercontent.com/u/2301403?v=3&s=460',
        thumb: 'https://avatars1.githubusercontent.com/u/2301403?v=3&s=460',
        text: 'md text here',
        blurb: 'blurb text here'
    }
]


export default function projects(state = default_state, action) {
    switch (action.type) {
    default:
        return state
    }
}
