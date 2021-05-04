const { Comments } = require('../models');


const commentData = [
    {
        post_id: 1,
        comment_text: 'This is...acceptable',
        created_by: 1
    },
    {
        post_id: 2,
        comment_text: 'This is...also acceptable',
        created_by: 2
    },
    {
        post_id: 2,
        comment_text: 'I like ice cream',
        created_by: 4
    },
    {
        post_id: 2,
        comment_text: 'I like meat loaf',
        created_by: 1
    },
    {
        post_id: 2,
        comment_text: 'I like pizza',
        created_by: 3
    },
    {
        post_id: 2,
        comment_text: 'I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 I like answer42 ',
        created_by: 4
    }
]

const seedComments = () => Comments.bulkCreate(commentData);
module.exports = seedComments;
