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
    },
    {
        post_name: 'A Dirty Job',
        post_text: "While Alpha Males are often gifted with superior physical attributes—size, strength, speed, good looks—selected by evolution over the eons by the strongest surviving and, essentially, getting all the girls, the Beta Male gene has survived not by meeting and overcoming adversity, but by anticipating and avoiding it. That is, when the Alpha Males were out charging after mastodons, the Beta Males could imagine in advance that attacking what was essentially an angry, woolly bulldozer with a pointy stick might be a losing proposition, so they hung back at camp to console the grieving widows. When Alpha Males set out to conquer neighboring tribes, to count coups and take heads, Beta Males could see in advance that in the event of a victory, the influx of female slaves was going to leave a surplus of mateless women cast out for younger trophy models, with nothing to do but salt down the heads and file the uncounted coups, and some would find solace in the arms of any Beta Male smart enough to survive. In the case of defeat, well, there was that widows thing again. The Beta Male is seldom the strongest or the fastest, but because he can anticipate danger, he far outnumbers his Alpha Male competition. The world is led by Alpha Males, but the machinery of the world turns on the bearings of the Beta Male.",
        created_by: 4,
    }
]

const seedPosts = () => Posts.bulkCreate(postData);
module.exports = seedPosts;