// let router = require('express').Router();
// let Case = require('../db').import('../models/case');

// //create a case
// router.post('/add-case', (req, res) => {
//     Case.create({
//         name: req.body.name,
//     })
//         .then(
//             function caseCreated(caseType) {
//                 res.status(200).json({
//                     message: `${caseType.name} added to case database`,
//                 });
//             }
//         )
//         .catch(err => res.status(500).json({ error: err }))
// })

// //view all
// router.get('/view', (req, res) => {
//     Case.findAll()
//         .then(cases => res.status(200).json(cases)).catch(err => res.status(500).json(err))
// })

// //view by type
// router.get('/view/:caseType', (req, res) => {
//     Case.findAll({
//         where: {
//             name: req.params.caseType
//         }
//     })
//         .then(cases => {
//             if (cases.length > 0) {
//                 res.status(200).json(cases)
//             } else {
//                 res.status(404).json({ message: 'Case Type not in database.' })
//             }
//         })
//         .catch(err => res.status(500).json(err))
// })


// //update a case
// router.put('/edit/:case', (req, res) => {
//     const caseEdit = {
//         name: req.body.name
//     }
//     Case.update(caseEdit, { where: { name: req.params.case } })
//         .then(updated => {
//                 if (updated > 0) {
//                     res.status(200).json({message: 'Case updated.'})
//                 } else {
//                     res.status(500).json({message: 'Case not found, no updates performed.'})
//                 }
//             })
//         .catch(err => res.status(500).json(err))
// })

// //delete a case
// router.delete('/delete/:case', (req, res) => {
//     Case.destroy({ where: { name: req.params.case } })
//         .then(deleted => {
//                 if (deleted > 0) {
//                     res.status(200).json({message: 'Case deleted.'})
//                 } else {
//                     res.status(500).json({message: 'Case does not exist.'})
//                 }
//             })
//         .catch(err => res.status(500).json(err))
// })
// module.exports = router;