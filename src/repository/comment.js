const CommentShema = require('../schemas/comment.js')
const ObjectId = require('mongoose').Types.ObjectId;
const { HttpCode } = require('../helpers/constants.js')
const { ErrorHandler } = require('../helpers/errorHandler')

class CommentRepository {
    constructor() {
        this.model = CommentShema
    }

    _checkId(id) {
        if (!ObjectId.isValid(id)) {
            throw new ErrorHandler(HttpCode.BAD_REQUEST, `id: not valid!`, "Bad Request")
        }
    }

    async getComment(projectId) {
        this._checkId(projectId)
        const results = await this.model.find({ projectId: projectId }).exec()
        return results
    }

    async create(data) {
        const result = await this.model.create({ ...data})
        return result
    }
}


module.exports = CommentRepository