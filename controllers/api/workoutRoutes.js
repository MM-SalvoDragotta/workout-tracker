const router = require("express").Router();
const Workout = require("../../models/index.js");

router.get("/workouts", (req, res) => {
    Workout.find({})
        .then((workout) => {            
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});



module.exports = router;