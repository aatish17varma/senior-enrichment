const express  = require('express');
const router = express.Router();
const Student = require("../models/student");

router.use((err, req, res, next) => {
    res.sendStatus(404);
})

router.get('/', (req, res, next) => {
    Student.findAll()
    .then(student => res.json(student) )
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    Student.findAll({where: {id: req.params.id}})
    .then(student => res.json(student) )
    .catch(next);
})



router.post("/", (req, res, next) =>{
    Student.findOrCreate({where: {
        name: req.body.name,
        email: req.body.email,
        campusId: req.body.campusId,
        image: req.body.image
    }})
    .then((student) => {
        console.log("reached the .then part")
        if(student.name !== null){
            res.json( student );
        }
        else{
            res.sendStatus(404);
        }
    })
    .catch(next);
})


router.put("/:id", (req, res, next) => {
    Student.findOne({where: {id: req.params.id}})
    .then((student) => {
        var updatedStudent = student.update(req.body);
        return updatedStudent;
    })
    .then((updatedStudent) => {
        res.send(updatedStudent);
    })
    .catch(err => {
        res.sendStatus(404);
    })
})

router.delete("/:id", (req, res, next) => {
    Student.destroy({where: {
        id: req.params.id
    }
    }).then( () => res.status(204).end())
    .catch(next);
})

module.exports = router;

