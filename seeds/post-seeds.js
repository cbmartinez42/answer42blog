const { Posts } = require('../models');

const postData = [
    {
        post_name: 'Jurassic Park',
        post_text: '"God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys god. Man creates dinosaurs." / "Dinosaurs eat man. Woman inherits the earth." ',
        created_by: 1,

    },
    {
        post_name: 'Lilo & Stitch',
        post_text: "It's sandwich day. Every Thursday I give Pudge the Fish a peanut butter sandwich. But, today we were out of peanut butter. I asked my sister what to give him and she said a tuna sandwich. I can't give Pudge tuna! Do you know what tuna is? IT'S FISH! If I gave Pudge tuna, I'd be an abomination! I'm late because I had to go to the store and get peanut butter cause all we have is...is. Stinking tuna...Pudge controls the weather.",
        created_by: 2,

    },
    {
        post_name: 'Office Space',
        post_text: "I’m Going To Need Those TPS Reports ASAP. So, If You Could Do That, That’d Be Great...",
        created_by: 1,
    }
]

const seedPosts = () => Posts.bulkCreate(postData);
module.exports = seedPosts;