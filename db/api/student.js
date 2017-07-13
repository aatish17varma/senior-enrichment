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
    Student.create(req.body)
    .then((student) => {
        if(student.name !== null){
            res.send({ student });
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
  Student.findOne( {where: {id: req.params.id} })
  .then((foundStudent) => {
      foundStudent === null || foundStudent === "" ? res.sendStatus(404) : Student.destroy(foundStudent);
  })
  .then(() => {
        res.send("Campus Succesfully deleted")
  })    
.catch(next);
})

module.exports = router;

