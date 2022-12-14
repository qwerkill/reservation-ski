const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userName :{
        type: String,
    },
    description: {
        type: String,
    },
    stars: {
        type: Number,
        enum:["1","2","3","4","5"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
});

module.exports = mongoose.model('Comment', commentSchema);