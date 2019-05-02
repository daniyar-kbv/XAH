const Role = require('../models/role.model.js');

exports.create = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Invalid parameters"
        });
    }

    const role = new Role({
        name: req.body.name
    });

    role.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Role."
        });
    });
}

exports.findOne = (req, res) => {
    Role.findById(req.params.roleId)
    .then(role => {
        if(!role) {
            return res.status(404).send({
                message: "Role not found with id " + req.params.roleId
            });            
        }
        res.send(role);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Role not found with id " + req.params.roleId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving role with id " + req.params.roleId
        });
    });
};