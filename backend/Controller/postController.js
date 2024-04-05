const Post = require("../Models/postModel");
exports.createPost = async (req, res) => {
  const { title, summary, imgUrl, content } = req.body;
  try {
    const newPost = await Post.create({
      title,
      summary,
      imgUrl,
      content,
    });
    if(newPost){
        res.status(201).json("Post Created Succefully")
    }else{
        res.status(500).json("Something bad happened, try again")
    }
    
  } catch (err) {}
};
