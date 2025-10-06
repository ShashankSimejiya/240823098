const Student = require('../Model/studentModel');

// Get All Students
exports.index = (req, res) => {
    Student.findAll()
        .then((student) => {
            console.log("All Students Retrieved Successfully", student);
        });
}

// Get Single Record
exports.show = async(req, res) => {
    const id = req.params.id;
    Student.findByPk(id)
    .then(Student => {
        if (Student){
            res.send({message: "Student Retrieved Successfully", Student})
        } else {
            res.send({message: "Student Not Found"})
        } 
    })
    .catch(err => {
        res.send({message: "Error Retrieving Student", err})
    });
}

// Get Insert the Record
exports.store = async (req, res) => {
    Student.create(req.body)
    .then(newStudent => {
        res.status(201).send({message :'Insert the New Students', newStudent})
    })
    .catch(err =>{
        res.status(500).send({message : 'Error Inserting Student', err})
    });
}

// Update the Record
exports.update = async (req, res) => {
    const id = req.params.id;
    Student.update(req.body, {where : {id : id}})
    .then(() => {
        res.send({message : 'Student Updated Successfully'})
    })
    .catch(err => {
        res.status(500).send({message : 'Error Updating Student', err})
    });
}

// Delete the Record
exports.delete = async (req, res) => {
    const id = req.params.id;
    Student.destroy({where : {id : id}})
    .then(() => {
        res.send({message : 'Student Deleted Successfully'});
    })
    .catch(err => {
        res.status(500).send({message : 'Error Deleting Student', err})
    });
}