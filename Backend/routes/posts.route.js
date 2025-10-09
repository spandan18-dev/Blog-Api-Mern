import express from 'express'
const router = express.Router()


// Components :
import {
    allposts,
    create_post,
    postid
} from '../components/post.logic.js'


router.get('/posts',allposts)
router.get('/posts/:id',postid)
router.post('/posts',create_post)

export default router