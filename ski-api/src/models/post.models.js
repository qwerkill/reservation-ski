const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  weight: {
    type: Number,
  },
  size: {
    type: Number,
  },
  style: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
