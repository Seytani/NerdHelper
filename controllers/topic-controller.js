let router = require('express').Router();
let { models } = require('../db');
let validateSesh = require('../middleware/validate-session');

//create a topic
router.post('/add-topic', validateSesh, async (req, res) => {
    let topic = await models.topic.create({
        name: req.body.name,
    });
    let user = await models.user.findOne({
        where: { id: req.user.id }
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
    models.topic.findAll({ where: {userId: req.user.id}, order: [['id', 'ASC']]} )
        .then(topics => {
            if (topics.length > 0) {
                res.status(200).json(topics);
            } else {
                res.status(420).json([]);
            }
        })
        .catch(err => res.status(500).json(err))
});


//get all questions per topic
router.get('/view-topic/:topicId', async (req, res) => {
    try {
        const topic = await models.topic.findByPk(req.params.topicId, { include: models.question, order:  [['id', 'ASC']]});
        /* SELECT questions.question FROM questions
INNER JOIN topics ON questions."topicId" = topics.id
WHERE topics.id = 3; */
        if (topic) {
            res.status(200).json(topic);
        } else {
            res.status(420).json([]);
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

//update a topic name
router.put('/edit/:topic', (req, res) => {
    const topicEdit = {
        name: req.body.name
    }
    models.topic.update(topicEdit, { where: { id: req.params.topic } })
        .then(updated => {
            if (updated > 0) {
                res.status(200).json({ message: 'Topic updated.' })
            } else {
                res.status(500).json({ message: 'Topic not found, no updates performed.' })
            }
        })
        .catch(err => res.status(500).json(err))
})

//delete a topic
router.delete('/delete/:topic', (req, res) => {
    models.topic.destroy({ where: { id: req.params.topic } })
        .then(deleted => {
            if (deleted > 0) {
                res.status(200).json({ message: 'Topic deleted.' })
            } else {
                res.status(500).json({ message: 'Topic does not exist.' })
            }
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router;