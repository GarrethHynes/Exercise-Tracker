const express = require('express')
const router = express.Router()
const { getExercises, setExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController')

router.get('/', getExercises)

router.post('/', setExercise)

router.put('/:id', updateExercise)

router.delete('/:id', deleteExercise)

module.exports = router

