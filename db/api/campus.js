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

router.get('/:id', (req, res, next)=>{
   Campus.findAll({where: {id: req.params.id}, include: [Student]}
   .then(foundCampus => {
        res.send(foundCampus)
   })
   .catch(next)
)
})

router.post("/", (req, res, next) =>{
    Campus.findOrCreate({where: {
        name: req.body.name,
        image: req.body.image
    }})
    .then((campus) => {
        if(campus.name !== null){
            res.json( campus );
        }
        else{
            res.sendStatus(404);
        }
    })
    .catch(next);
})

router.put("/:id", (req, res, next) => {
    Campus.findById( req.params.id )
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
  Campus.destroy( {where: {id: req.params.id} })
  .then(() => {
        res.status(204).end()
  })    
.catch(next);
})

module.exports = router;
