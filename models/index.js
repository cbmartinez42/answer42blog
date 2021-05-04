const Comments = require('./Comments');
const Posts = require('./Posts');
const Users = require('./Users');


//  user has many posts & comments
Users.hasMany(Posts, {
    foreignKey: 'created_by',
});

Users.hasMany(Comments, {
    foreignKey: 'created_by',
    onDelete: 'CASCADE'
});
// post has many comments
Posts.hasMany(Comments, {
    foreignKey: 'post_id', 
    onDelete: 'CASCADE',
})

// post belongs to one user
Posts.belongsTo(Users, {
    foreignKey: 'created_by'
})

// comment has one user
Comments.belongsTo(Users, {
    foreignKey: 'created_by',
})

module.exports = {
    Comments,
    Posts,
    Users
}