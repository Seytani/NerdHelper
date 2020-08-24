let router = require('express').Router();
let { models } = require('../db');


//create a question
router.post('/add', async (req, res) => { 
    let question = await models.question.create({
        question: req.body.question,
        correctAnswer: req.body.correctAnswer,
        incorrectAnswers: req.body.incorrectAnswers
    });
    let topic = await models.topic.findOne({
        where: {id: req.body.topic_id}
    });
    topic.addQuestions(question)
    .then(function questionCreated(question) {
            res.status(200).json({
                message: `Question added to ${topic.name}`,
            });
        }
    )
    .catch(err => res.status(500).json({ error: err }))
});

//update a question
router.put('/edit/:id', (req, res) => {
    const questionEdit = { newQuestion, newCorrectAnswer, newIncorrectAnswers, inReview  } = req.body

    models.question.update(questionEdit, { where: { id: req.params.id } })
        .then(updated => {
            if (updated > 0) {
                res.status(200).json({ message: 'question updated.' })
            } else {
                res.status(500).json({ message: 'question not found, no updates performed.' })
            }
        })
        .catch(err => res.status(500).json(err))
})

//update question in review
router.put('/edit/:id', (req, res) => {
    const questionEdit = { review } = req.body;

    models.question.update(questionEdit, { where: { id: req.params.id } })
            .then(updated => { res.status(200).json(updated) })
            .catch(err => res.status(500).json(err))
})

//delete a question
router.delete('/delete/:id', (req, res) => {
    models.question.destroy({ where: { id: req.params.id } })
        .then(deleted => { res.status(200).json(deleted) })
        .catch(err => res.status(500).json(err))
})

module.exports = router;