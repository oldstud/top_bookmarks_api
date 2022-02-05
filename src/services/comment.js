const { CommentRepository } = require('../repository')


class CommentServices {
    constructor() {
        this.repositories = {
            comment: new CommentRepository()
        }
    }

    async getComment(projectId) {
        const result = await this.repositories.comment.getComment(projectId)
        return result
    }

    
    async create(data) {
        const result = await this.repositories.comment.create(data)
        return result
    }
}

module.exports = CommentServices