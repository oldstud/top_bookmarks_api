const { HttpCode} = require('../helpers/constants.js')
const Config = require('../config/generateConfig.js')

const getConfig = async (req, res, next) => {
    try {       
        const params = req.query
        const config = await Config.getConfig(params)
        res.status(HttpCode.OK).json({
            status: 'success',
            code: HttpCode.OK,
            data: {
                config,
            }
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getConfig,
}