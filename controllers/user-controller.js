let router = require('express').Router();
let User = require('../db').import('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

//create a user
router.post('/add-user', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 15)
    })
    .then(
        function userCreated(user) {
            let token = jwt.sign({id: user.id}, process.env.JWT_KEY, {expiresIn: '30d'});
            res.status(200).json({
                message: 'User added to database',
                dataAdded_user: user.name,
                dataAdded_email: user.email,
                dataAdded_pass: user.password,
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({error: err}))
})

//login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(function handleLogin(user) {
        if(user) {
            bcrypt.compare(req.body.password, user.password, (err, matches) => {
                if(matches) {
                    let token = jwt.sign({id: user.id} , process.env.JWT_KEY, {expiresIn: '30d'});
                    res.status(200).json({
                        message: `User signed in succesfully`,
                        sessionToken: token
                    })
                } else {
                    res.status(505).json({
                        message: 'Invalid username or password.'
                    })
                }
            })
        } else {
            res.status(404).json({message: 'User not Found'});
        }
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router;