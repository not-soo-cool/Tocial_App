{const User = require('../models/User');
const Post = require("../models/Post");
const cloudinary = require("cloudinary");

exports.createPost = async (req, res) => {

    try {

        const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
            folder: "posts",
        });

        const newPostData = {
            caption: req.body.caption,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
            owner: req.user._id
        }

        const post = await Post.create(newPostData);

        const user = await User.findById(req.user._id);

        user.posts.unshift(post._id)

        await user.save()

        res.status(201).json({
            success: true,
            message: "Post created"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.likeAndUnlikePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: true,
                message: "Post not found"
            })
        }

        if(post.likes.includes(req.user._id)){

            const index = post.likes.indexOf(req.user._id);
            post.likes.splice(index, 1);

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Post Unliked"
            })
        }

        else {

            post.likes.push(req.user._id)

            await post.save();

            res.status(200).json({
                success: true,
                message: "Post Liked"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.deletePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        // console.log(post);

        if(!post){
            return res.status(404).json({
                success: true,
                message: "Post not found"
            })
        }

        if(post.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        const user = await User.findById(req.user._id);

        const index = user.posts.indexOf(req.params.id);
        user.posts.splice(index, 1);

        await user.save();

        await Post.findByIdAndDelete(req.params.id);
    
        res.status(200).json({
            success:true,
            message:"Post Deleted"
        });

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getPostsOfFollowing = async (req, res) => {

    try {

        const user = await User.findById(req.user._id)

        const posts = await Post.find({
            owner: {
                $in: user.following,
            }
        }).populate("owner likes comments.user")

        res.status(200).json({
            success:true,
            posts: posts.reverse(),
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.updateCaption = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({
                success: true,
                message: "Post not found"
            })
        }

        if(post.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        post.caption = req.body.caption;

        await post.save();

        res.status(200).json({
            success:true,
            message: "Caption updated"
        });

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.addComment = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }

        post.comments.push({
            user: req.user._id,
            comment: req.body.comment
        })

        await post.save();

        res.status(200).json({
            success:true,
            message: "Comment Added"
        });

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.updateComment = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id1);

        if(!post){
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }

        if(!req.body.comment){
            return res.status(400).json({
                success: false,
                message: "New comment can not be empty"
            })
        }

        let com = -1;

        post.comments.forEach((item, index) => {
            if(item.user.toString() === req.user._id.toString()){
                com = index;
                return;
            }
        });

        if(com==-1){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        } 
        
        else {

            post.comments[com].comment = req.body.comment
    
            await post.save();
    
            res.status(200).json({
                success:true,
                message: "Comment updated"
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.deleteComment = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id1);

        if(!post){
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }

        let com = -1

        post.comments.forEach((item, index) => {
            if(item._id.toString() === req.params.id2.toString()){
                com = index;
            }
        });

        if(com===-1){
            return res.status(404).json({
                success: false,
                message: "No such comment exists"
            })
        }
        
        if(post.owner.toString() === req.user._id.toString()){
            post.comments.splice(com, 1);

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Comment from your post has been deleted successfully"
            })
        }
        
        if(post.comments[com].user.toString() !== req.user._id.toString()){
            return res.status(400).json({
                success: false,
                message: "Unauthorized"
            })
        } 
        
        else {
            post.comments.splice(com, 1);
            
            await post.save();

            return res.status(200).json({
                success:true,
                message: "Your comment is removed from the post"
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}}