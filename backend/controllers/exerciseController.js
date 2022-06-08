
const asyncHandler = require('express-async-handler')
const Exercise = require('../models/exerciseModel')

// @desc    get exercises
// @route   GET /api/exercises
// @access  Public
const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find()

    res.status(200).json(exercises)
})


// @desc    set exercise
// @route   POST /api/exercise
// @access  Public
const setExercise = asyncHandler(async (req, res) => {
    if(!req.body.title) {
        res.status(400)
        throw new Error('Please add a title')    // this is the express error handler
    }

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')    // this is the express error handler
    }

    const exercise = await Exercise.create({
        title: req.body.title,
        text: req.body.text
    })

    res.status(200).json(exercise)

})



// @desc    update exercise
// @route   PUT /api/exercises/:id
// @access  Public
const updateExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    const updateExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateExercise)
})


// @desc    delete exercise 
// @route   DELETE /api/exercises/:id
// @access  Public
const deleteExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id)

  if (!exercise) {
    res.status(400)
    throw new Error('Exercise not found')
  }

  await exercise.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise
}