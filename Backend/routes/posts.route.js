import express from 'express'
const postrouter = express.Router()


// Components :
import {
    allposts,
    create_post,
    postid,
    update_post,
    delete_post
} from '../components/post.logic.js'


postrouter.get('/posts',allposts)
postrouter.get('/posts/:id',postid)
postrouter.post('/posts',create_post)
postrouter.patch('/posts/:id',update_post)
postrouter.delete('/posts/:id',delete_post)

export default postrouter