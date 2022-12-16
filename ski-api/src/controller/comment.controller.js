const Comment = require("../models/comment.models");
const Post = require("../models/post.models");

const CommentController = {
  create: async (req, res) => {
    try {
      const comment = new Comment(req.body);
      const newComment = await comment.save();
      const post = await Post.findById(req.body.post);
      post.comments.push(newComment._id);
      await post.save();
      res.send(newComment);
    } catch (error) {
      res.status(400).send({ message: "aare" });
    }
  },
  getAllByPost: async (req, res) => {
    try {
      const comments = await Comment.find({ post: req.params.id });
      res.send(comments);
    } catch (error) {
      res.status(404).send({ message: err.message });
    }
  },
  getAll : async (req, res) =>{
    try{
        const comments = await Comment.find()
        res.send(comments)
    } catch (error) {
        res.status(404).send({message:err.message});
    }
},
};

module.exports = CommentController;
