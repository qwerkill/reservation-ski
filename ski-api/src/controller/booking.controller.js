const Booking = require("../models/booking.models");
const Post = require("../models/post.models");

const BookingController = {
  create : async (req, res) =>{
    try {
      const booking = new Booking(req.body);
      const newBooking = await booking.save();
      const post = await Post.findById(req.body.post);
      post.booking.push(newBooking._id);
      await post.save();
      res.send(newBooking);
    } catch (error) {
      res.status(400).send({ message: "aare" });
    }
},

  getAllByPost : async (req, res) =>{
    try{
        const bookings = await Booking.find({post: req.params.id})
        res.send(bookings)
    } catch (error) {
        res.status(404).send({message:err.message});
    }
},
  getAll : async (req, res) =>{
    try{
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        res.status(404).send({message:err.message});
    }
},
};

module.exports = BookingController;
