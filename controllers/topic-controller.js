let router = require('express').Router();
let Topic = require('../db').import('../models/topic');

//create a topic
router.post('/add-topic', (req, res) => {
    Topic.create({
        name: req.body.name,
    })
        .then(
            function topicCreated(topicType) {
                res.status(200).json({
                    message: `${topicType.name} added to topic database`,
                });
            }
        )
        .catch(err => res.status(500).json({ error: err }))
})

//view all
router.get('/view', (req, res) => {
    Topic.findAll()
        .then(topics => res.status(200).json(topics)).catch(err => res.status(500).json(err))
})

// //view by type
// router.get('/view/:topicType', (req, res) => {
//     Topic.findAll({
//         where: {
//             name: req.params.topicType
//         }
//     })
//         .then(topics => {
//             if (topics.length > 0) {
//                 res.status(200).json(topics)
//             } else {
//                 res.status(404).json({ message: 'topic Type not in database.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })


//update a topic
router.put('/edit/:topic', (req, res) => {
    const topicEdit = {
        name: req.body.name
    }
    Topic.update(topicEdit, { where: { name: req.params.topic } })
        .then(updated => {
                if (updated > 0) {
                    res.status(200).json({message: 'Topic updated.'})
                } else {
                    res.status(500).json({message: 'Topic not found, no updates performed.'})
                }
            })
        .catch(err => res.status(500).json(err))
})

//delete a topic
router.delete('/delete/:topic', (req, res) => {
    Topic.destroy({ where: { name: req.params.topic } })
        .then(deleted => {
                if (deleted > 0) {
                    res.status(200).json({message: 'topic deleted.'})
                } else {
                    res.status(500).json({message: 'topic does not exist.'})
                }
            })
        .catch(err => res.status(500).json(err))
})

module.exports = router;