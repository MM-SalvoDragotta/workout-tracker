const router = require("express").Router();
const {Workout , Exercise} = require("../../models/index.js");

// router.get("/", (req, res) => {
//     Workout.find({})   
//         .then((workout) => {            
//             res.json(workout)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// });

router.get("/", async (req, res) => {
    try {
    const allWorkouts = await Workout.find({});
    res.json(allWorkouts)   
} catch (err) {
    res.status(500).json(err);
  }
})  



module.exports = router;