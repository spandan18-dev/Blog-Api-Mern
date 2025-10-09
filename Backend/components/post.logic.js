import posts from '../models/posts.model.js'

const allposts = async (req,res)=>{
    try {
        const allpost = await posts.find()
        res.status(200).json(allpost)
    } catch (error) {
        res.status(500).json({
            message : "Error in fetching",
            error :error
        })
    }
}

// Posts  by id
const postid = async (req,res)=>{
    try {
        const postid = await posts.findById(req.params.id)
        res.status(200).json(postid)
    } catch (error) {
        res.status(201).json({
            message : "Error in fetching",
            error :error
        })
    }
}

const create_post = async (req,res)=>{
    try {
        const {title,slug,content,category,tags} = req.body
        const newPost = await posts.create({
            title :title,
            slug : slug,
            content :content,
            category :category,
            tags :tags
        })
        res.status(200).json({
            message :"post created sucesfully",
            newPost
        })

    } catch (error) {
        res.status(500).json({
            message : "Error in creating",
            error
        }) 
    }
}


export {
    allposts,
    create_post,
    postid
}