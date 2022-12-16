const Shop = require("../models/shop.models");

const ShopController = {
    create : async (req, res) =>{
        try{
            const shop = new Shop(req.body)
            const newShop = await shop.save()
            res.send(newShop)
        } catch (error) {
            res.status(400).send({message:"ça na pas marcher"});
        }
    },
    getAll : async (req, res) =>{
        try{
            const shops = await Shop.find()
            res.send(shops)
        } catch (error) {
            res.status(404).send({message:err.message});
        }
    },
    
    getOne : async (req, res) =>{
        const shop = await Shop.findById(req.params.id)
        res.send(shop)
    },
    update : async (req, res) =>{
        try{
            const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.send(shop)
        } catch (error) {
            res.status(404).send({message:err.message});
        }
    },
    delete : async (req, res) =>{
        try{
            await Shop.findByIdAndDelete(req.params.id)
            res.status(204).send({message: "Shop deleted successfully"})
        } catch (error) {
            res.status(400).send({message:err.message});
        }
    }
};

module.exports = ShopController;
   
