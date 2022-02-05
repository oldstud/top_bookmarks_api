const express = require('express')
const router = express.Router()
const guard = require('../../helpers/guard')

const controllerConfig = require('../../controllers/config.js')

router.get('/', guard, controllerConfig.getConfig)

module.exports = router