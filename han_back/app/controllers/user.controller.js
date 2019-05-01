const User = require('../models/user.model');

exports.create = (req, res) => {

    const DEFAULT_ROLE = "5cc9c6ecca0cf71ff3d9e484";

    if(!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role || DEFAULT_ROLE
    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}