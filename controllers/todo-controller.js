// let router = require('express').Router();
// let Todo = require('../db').import('../models/todo');

// //create a todo
// router.post('/add', (req, res) => {
//     Todo.create({
//         title: req.body.title,
//         description: req.body.description,
//         owner: req.user.id
//     })
//         .then(
//             function todoCreated(todo) {
//                 res.status(200).json({ todo });
//             })
//         .catch(err => res.status(500).json({ error: err }))
// })

// //view all
// router.get('/', (req, res) => {
//     Todo.findAll({
//         where: { owner: req.user.id }
//     })
//         .then(todos => res.status(200).json(todos)).catch(err => res.status(500).json(err))
// })

// //update a todo
// router.put('/edit/:id', (req, res) => {
//     const todoEdit = { title, description } = req.body

//     Todo.update(todoEdit, { where: { id: req.params.id } })
//         .then(updated => {
//             if (updated > 0) {
//                 res.status(200).json({ message: 'Todo updated.' })
//             } else {
//                 res.status(500).json({ message: 'Todo not found, no updates performed.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

// //update todo completion
// router.put('/edit/:id', (req, res) => {
//     const todoEdit = { completed } = req.body

//     Todo.update(todoEdit, { where: { id: req.params.id } })
//         .then(updated => {
//             if (updated > 0) {
//                 res.status(200).json({ message: 'Todo completion updated.' })
//             } else {
//                 res.status(500).json({ message: 'Todo not found, no updates performed.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

// //delete a todo
// router.delete('/delete/:id', (req, res) => {
//     Todo.destroy({ where: { id: req.params.id } })
//         .then(deleted => {
//             if (deleted > 0) {
//                 res.status(200).json({ message: 'Todo deleted.' })
//             } else {
//                 res.status(500).json({ message: 'Todo does not exist.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })

// module.exports = router;