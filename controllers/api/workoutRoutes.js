const router = require("express").Router();
const {Workout , Exercise} = require("../../models/index.js");

router.get("/", (req, res) => {
    Workout.find({})
    .populate("exercises")
        .then((workout) => {            
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});



module.exports = router;