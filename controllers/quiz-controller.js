let router = require('express').Router();

router.post('/quiz', (req, res) => {
    let questions = body.req.questions;
    let answers = body.req.answers;
    let score = 0;
    for(let i = 0; i < questions.length; i++) {
        if(questions[i].correctAnswer === answers[i]) {
            score += 10;
        }
    }
    score = (score / questions.length);
            res.status(200).json({score: score})
        .catch(err => res.status(500).json({ error: err }))
})


module.exports = router;