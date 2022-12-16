const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const shopSchema = new Schema({
    name: {
        type: String,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    address: {
        type: String,
    }

});

module.exports = mongoose.model("Shop", shopSchema);