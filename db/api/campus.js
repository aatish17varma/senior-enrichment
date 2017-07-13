const express = require("express");
var router  = express.Router();
const {Campus} = require("../models/index");


router.use((err, req, res, next) => {
    res.sendStatus(404);
})

router.get('/', (req, res, next) => {
    Campus.findAll()
    .then(artist => res.json(artist) )
    .catch(next);
})

router.get('/:id/students', (req, res, next)=>{
   Campus.findAll({where: {id: req.params.id}}
   .then(foundCampus => {
        res.send(foundCampus)
   })
   .catch(next)
)
})

router.post("/", (req, res, next) =>{
    console.log(req.body);
    Campus.create(req.body)
    .then((campus) => {
        if(campus.name !== null){
            res.send({ campus });
        }
        else{
            res.sendStatus(404);
        }
    })
    .catch(next);
})

router.put("/:id", (req, res, next) => {
    console.log("reached put route");
    Campus.findOne({where: {id: req.params.id}})
    .then((campus) => {
        var updatedCampus = campus.update(req.body);
        return updatedCampus;
    })
    .then((updatedCampus) => {
        res.send(updatedCampus);
    })
    .catch(err => {
        res.sendStatus(404);
    })
})

router.delete("/:id", (req, res, next) => {
  Campus.findOne( {where: {id: req.params.id} })
  .then((foundCampus) => {
      foundCampus === null || foundCampus === "" ? res.sendStatus(404) : Campus.destroy(foundCampus);
  })
  .then(() => {
        res.send("Campus Succesfully deleted")
  })    
.catch(next);
})


module.exports = router;
