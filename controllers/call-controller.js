// let router = require('express').Router();
// let Call = require('../db').import('../models/call');

// //create a call
// router.post('/add-call', (req, res) => {
//     Call.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 15)
//     })
//     .then(
//         function callCreated(call) {
//             let token = jwt.sign({id: call.id}, process.env.JWT_KEY, {expiresIn: '30d'});
//             res.status(200).json({
//                 message: 'Call added to database',
//                 dataAdded_call: call.name,
//                 dataAdded_email: call.email,
//                 dataAdded_pass: call.password,
//                 sessionToken: token
//             });
//         }
//     )
//     .catch(err => res.status(500).json({error: err}))
// })

// module.exports = router;