const express = require('express')
const controllersComment = require('../../controllers/comment.js')
const router = express.Router()
const { validateCreateComment } = require('../../validation/comment.js')
const guard = require('../../helpers/guard')

router.post('/', guard, validateCreateComment, controllersComment.addComment)
router.get('/:id', guard, controllersComment.getAllComment)

module.exports = router