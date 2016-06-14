let default_state = {
    name: 'Andrew Segavac',
    title: 'Senior Software Engineer in Test',
    emails: ['andrewseg@gmail.com', 'asegavac@umich.edu'],
    website: 'https://github.com/asegavac',
    about: "A First Level Header\n"+
            "====================\n"+

            "A Second Level Header\n"+
            "---------------------\n\n"+

            "Now is the time for all good men to come to\n"+
            "the aid of their country. This is just a\n"+
            "regular paragraph.\n"+

            "The quick brown fox jumped over the lazy\n"+
            "dog's back.\n"+

            "### Header 3\n"+

            "> This is a blockquote.\n"+
            "> \n"+
            "> This is the second paragraph in the blockquote.\n"+
            ">\n"+
            "> ## This is an H2 in a blockquote\n",
    resume: 'https://drive.google.com/file/d/0B06nsj0FQX_3SGRkb2FITFJrazg/preview',
    image: 'https://avatars1.githubusercontent.com/u/2301403?v=3&s=460'
}


export default function user(state = default_state, action) {
    switch (action.type) {
    default:
        return state
    }
}
