const {HttpCode} = require('../helpers/constants.js')
const {ApartmentService} = require('../services')

const apartmentService = new ApartmentService();

const getAll = async (req, res, next) => {
    try {
        const apartment = await apartmentService.getAll()
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                apartment,
            }
        })
    } catch (error) {
        next(error)
    }
}

const getByID = async (req, res, next) => {
    try {
        const apartment = await apartmentService.getByID(req.params)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
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

const getAllMyApartment = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.getAllMy(userId)
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                apartment,
            }
        })
    } catch (error) {

        next(error)
    }
}

const getByIDMy = async (req, res, next) => {
    try {
        const userId = req.user.id
        const apartment = await apartmentService.getByIDMy(req.params, userId)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
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
        const apartment = await apartmentService.create(req.body, userId)
        res.status(HttpCode.CREATED).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: {
                apartment,
            }
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const userId = req.user.id//not need for update rating, maybe need add new method for update by only if this item is some user item
        const apartment = await apartmentService.update(req.params, req.body, userId)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
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
        const apartment = await apartmentService.update(req.params, req.body, userId)

        if (apartment) {
            res.status(HttpCode.OK).json({
                status: 'success',
                code: HttpCode.OK,
                data: {
                    apartment,
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
        const apartment = await apartmentService.remove(req.params, userId)

        if (apartment) {
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
    getAllMyApartment,
    getByIDMy,
    create,
    update,
    patch,
    remove
}