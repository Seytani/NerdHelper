let router = require('express').Router();
let Question = require('../db').import('../models/question');

//create a question
router.post('/add', (req, res) => {
    Question.create({
        question: req.body.question,
        correctAnswer: req.body.correctAnswer,
        incorrectAnswers: req.body.incorrectAnswers,
        owner: req.user.id,
    })
        .then(
            function questionCreated(question) {
                res.status(200).json({ question });
            })
        .catch(err => res.status(500).json({ error: err }))
})

// //view all
// router.get('/', (req, res) => {
//     Question.findAll({
//         where: { owner: req.user.id }
//     })
//         .then(questions => res.status(200).json(questions)).catch(err => res.status(500).json(err))
// })

// //update a question
// router.put('/edit/:id', (req, res) => {
//     const questionEdit = { title, description } = req.body

//     Question.update(questionEdit, { where: { id: req.params.id } })
//         .then(updated => {
//             if (updated > 0) {
//                 res.status(200).json({ message: 'question updated.' })
//             } else {
//                 res.status(500).json({ message: 'question not found, no updates performed.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

// //update question completion
// router.put('/edit/:id', (req, res) => {
//     const questionEdit = { completed } = req.body

//     Question.update(questionEdit, { where: { id: req.params.id } })
//         .then(updated => {
//             if (updated > 0) {
//                 res.status(200).json({ message: 'question completion updated.' })
//             } else {
//                 res.status(500).json({ message: 'question not found, no updates performed.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

// //delete a question
// router.delete('/delete/:id', (req, res) => {
//     Question.destroy({ where: { id: req.params.id } })
//         .then(deleted => {
//             if (deleted > 0) {
//                 res.status(200).json({ message: 'question deleted.' })
//             } else {
//                 res.status(500).json({ message: 'question does not exist.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

module.exports = router;