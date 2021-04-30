const { Posts } = require('../models');

const postData = [
    {
        post_name: 'A New way to post HTML',
        post_text: 'this is nothing',
        created_by: 1,

    },
    {
        post_name: 'The force is strong',
        post_text: 'with this one',
        created_by: 2,

    }
]

const seedPosts = () => Posts.bulkCreate(postData);
module.exports = seedPosts;