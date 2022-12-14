const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    telephoneNumber: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }
});

module.exports = mongoose.model('Booking', bookingSchema);