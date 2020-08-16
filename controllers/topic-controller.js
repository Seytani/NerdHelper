let router = require('express').Router();
let { models } = require('../db');
let validateSesh = require('../middleware/validate-session');

//create a topic
router.post('/add-topic', async (req, res) => {
    let topic = await models.topic.create({
        name: req.body.name,
    });
    let user = await models.user.findOne({
        where: { id: req.body.user_id }
    });
    user.update({})
    user.addTopics(topic)
        .then(function topicCreated() {
            res.status(200).json({
                message: `Topic added to database`,
            });
        }
        )
        .catch(err => res.status(500).json({ error: err }))
})

//view all by user
router.get('/view-all',validateSesh, (req, res) => {
    models.topic.findAll({ where: {userId: req.user.id} })
        .then(topics => {
            if (topics.length > 0) {
                res.status(200).json(topics);
            } else {
                res.status(420).json({ message: 'No Topics.' });
            }
        })
        .catch(err => res.status(500).json(err))
});


//get all questions per topic
router.get('/view-topic/:topicId', async (req, res) => {
    try {
        const topic = await models.topic.findByPk(req.params.topicId, { include: models.question });
        /* SELECT questions.question FROM questions
INNER JOIN topics ON questions."topicId" = topics.id
WHERE topics.id = 3; */
        if (topic) {
            res.status(200).json(topic);
        } else {
            res.status(420).json({ message: 'Topic Type not in database.' });
        }
    } catch (err) {
        res.status(500).json(err);
    }

});


// //update a topic
// router.put('/edit/:topic', (req, res) => {
//     const topicEdit = {
//         name: req.body.name
//     }
//     Topic.update(topicEdit, { where: { name: req.params.topic } })
//         .then(updated => {
//             if (updated > 0) {
//                 res.status(200).json({ message: 'Topic updated.' })
//             } else {
//                 res.status(500).json({ message: 'Topic not found, no updates performed.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

// //delete a topic
// router.delete('/delete/:topic', (req, res) => {
//     Topic.destroy({ where: { name: req.params.topic } })
//         .then(deleted => {
//             if (deleted > 0) {
//                 res.status(200).json({ message: 'topic deleted.' })
//             } else {
//                 res.status(500).json({ message: 'topic does not exist.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

module.exports = router;