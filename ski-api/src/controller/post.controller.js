const Post = require('../models/post.models')



const PostController = {
    getAll : async (req, res) =>{
        try{
            const posts = await Post.find().populate('comments').populate('bookings')
            res.send(posts)
        } catch (error) {
            res.status(404).send({message:err.message});
        }
    },
    getOne : async (req, res) =>{
       const  post = await Post.findById(req.params.id).populate('comments').populate('bookings')
         res.send(post)
    },
    create : async (req, res) =>{
        try{
            const post = new Post(req.body)
            const newPost = await post.save()
            res.send(newPost)
        } catch (error) {
            res.status(400).send({message:"ça na pas marcher"});
        }
    },
    update : async (req, res) =>{
        try{
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.send(post)
        } catch (error) {
            res.status(404).send({message:err.message});
        }
    },
    delete : async (req, res) =>{
        try{
            await Post.findByIdAndDelete(req.params.id)
            res.status(204).send({message: "Post deleted successfully"})
        } catch (error) {
            res.status(400).send({message:err.message});
        }
    },
    // trouver les commentaires d'un post
    getComments : async (req, res) =>{
        try{
            const post = await Post.findById(req.params.id).populate('comments')
            res.send(post.comments)
        } catch (error) {
            res.status(404).send({message:err.message});
        }
    },

}

module.exports = PostController;
