const {HttpCode} = require('../helpers/constants.js')
const {MarkbooksServices} = require('../services')

const markbooksService = new MarkbooksServices();

const getAll = async (req, res, next) => {
    try {
        const markbooks = await markbooksService.getAll()
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                markbooks,
            }
        })
    } catch (error) {
        next(error)
    }
}

const getByID = async (req, res, next) => {
    try {
        const markbook = await markbooksService.getByID(req.params)

        if (markbook) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    markbook,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const getAllMy = async (req, res, next) => {
    try {
        const userId = req.user.id
        const markbooks = await markbooksService.getAllMy(userId)
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                markbooks,
            }
        })
    } catch (error) {

        next(error)
    }
}

const getByIDMy = async (req, res, next) => {
    try {
        const userId = req.user.id
        const markbook = await markbooksService.getByIDMy(req.params, userId)

        if (markbook) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    markbook,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const userId = req.user.id
        const markbook = await markbooksService.create(req.body, userId)
        res.status(HttpCode.CREATED).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: {
                markbook,
            }
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const userId = req.user.id//not need for update rating, maybe need add new method for update by only if this item is some user item
        const markbook = await markbooksService.update(req.params, req.body, userId)

        if (markbook) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    markbook,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const patch = async (req, res, next) => {
    try {
        const userId = req.user.id
        const markbook = await markbooksService.update(req.params, req.body, userId)

        if (markbook) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    markbook,
                }
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const userId = req.user.id
        const markbook = await markbooksService.remove(req.params, userId)

        if (markbook) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
            })
        } else {
            return next({
                status: HttpCode.NOT_FOUND,
                message: "not found!",
                data: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAll,
    getByID,
    getAllMy,
    getByIDMy,
    create,
    update,
    patch,
    remove
}