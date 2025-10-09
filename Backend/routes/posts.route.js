import express from 'express'
const router = express.Router()


// Components :
import {
    allposts,
    create_post,
    postid,
    update_post,
    delete_post
} from '../components/post.logic.js'


router.get('/posts',allposts)
router.get('/posts/:id',postid)
router.post('/posts',create_post)
router.patch('/posts/:id',update_post)
router.delete('/posts/:id',delete_post)

export default router