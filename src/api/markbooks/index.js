const express = require('express')
const controllersMarkbooks = require('../../controllers/markbooks.js')
const router = express.Router()
const { validateCreateMarkbooks, validateUpdateMarkbooks } = require('../../validation/markbooks.js')
const guard = require('../../helpers/guard')


router.get('/all/',guard, controllersMarkbooks.getAll)
router.get('/all/:id',guard, controllersMarkbooks.getByID)
router.post('/mymarkbooks/', guard, validateCreateMarkbooks, controllersMarkbooks.create)
router.get('/mymarkbooks/', guard, controllersMarkbooks.getAllMy)
router.get('/mymarkbooks/:id', guard, controllersMarkbooks.getByIDMy)
router.put('/mymarkbooks/:id', guard, validateUpdateMarkbooks, controllersMarkbooks.update)
router.patch('/mymarkbooks/:id', guard, validateUpdateMarkbooks, controllersMarkbooks.patch)
router.delete('/mymarkbooks/:id', guard, controllersMarkbooks.remove)

module.exports = router