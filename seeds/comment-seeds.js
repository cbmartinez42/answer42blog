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
    }
]

const seedComments = () => Comments.bulkCreate(commentData);
module.exports = seedComments;
