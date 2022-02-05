const { MarkboksRepository } = require('../repository')


class MarkbooksServices {
    constructor() {
        this.repositories = {
            markbooks: new MarkboksRepository()
        }
    }

    async getAll() {
        const data = await this.repositories.markbooks.getAll()
        return data
    }

    async getByID({ id }) {
        const data = await this.repositories.markbooks.getByID(id)
        return data
    }

    async getAllMy(userId) {
        const data = await this.repositories.markbooks.getAllMy(userId)
        return data
    }

    async getByIDMy({ id }, userId) {
        const data = await this.repositories.markbooks.getByIDMy(id, userId)
        return data
    }

    async create(body, userId) {
        const data = await this.repositories.markbooks.create(body, userId)
        return data
    }

    async update({ id }, body, userId) {
        const data = await this.repositories.markbooks.update(id, body, userId)
        return data
    }

    async remove({ id }, userId) {
        const data = await this.repositories.markbooks.remove(id, userId)
        return data
    }
}

module.exports = MarkbooksServices