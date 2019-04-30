const Role = require('../models/role.model.js');

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Role.findById(req.params.noteId)
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