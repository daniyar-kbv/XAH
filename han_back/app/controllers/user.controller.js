const User = require('../models/user.model');

exports.create = (req, res) => {

<<<<<<< HEAD
    const DEFAULT_ROLE = "5cc9c6ecca0cf71ff3d9e484";
=======
    // Changable value
    const DEFAULT_ROLE = "5cc89f638c63d24eac5e11dc";
>>>>>>> 4280018bff0ed2204c6b4774485404681a5b8524

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