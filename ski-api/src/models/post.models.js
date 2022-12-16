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
    type: String,
    enum:["Moins de 45kg","Entre 45 et 65kg","Plus de 65kg"]
  },
  size: {
    type: Number,
  },
  style: {
    type: String,
    enum:["Freeride","Freestyle","Piste","Polyvalnt"]
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
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
  },
});

module.exports = mongoose.model("Post", postSchema);
