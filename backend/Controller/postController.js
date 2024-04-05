const Post = require("../Models/postModel");
exports.createPost = async(req,res) =>{
    try{
        res.status(201).json(req.body);
    }catch(err){

    }
}