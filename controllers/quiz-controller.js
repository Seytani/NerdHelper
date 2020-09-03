let router = require('express').Router();

router.post('/', (req, res) => {
    let questions = req.body.questions;
    let answers = req.body.answers;
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].correctAnswer === answers[i]) {
            score += 10;
        }
    }
    score = (Math.floor(score / questions.length) * 10);
    res.status(200).json({score})
        .catch(err => res.status(500).json({ error: err }))
});


module.exports = router;