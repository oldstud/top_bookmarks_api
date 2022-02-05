const { HttpCode} = require('../helpers/constants.js')
const {CommentService} = require('../services')

const commentService = new CommentService();


const getAllComment = async (req, res, next) => {
    try {
        const projectId=req.params.id;
        const comments = await commentService.getComment(projectId)
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                comments,
            }
        })
    } catch (error) {
        next(error)
    }
}

const addComment = async (req, res, next) => {
    try {
        const comment = await commentService.create(req.body)

        res.status(HttpCode.CREATED).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: {
                comment,
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllComment,
    addComment,
}