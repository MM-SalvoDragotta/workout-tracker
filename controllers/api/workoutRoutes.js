const router = require("express").Router();
const Workout  = require("../../models/Workout.js");

// router.get("/", async (req, res) => {
//     try {
//     const allWorkouts = await Workout.find({});
//     res.json(allWorkouts)   
// } catch (err) {
//     res.status(500).json(err);
//   }
// })  

router.get("/", async (req, res) => {
    try{
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration'
                    },
                },
            },
        ]);
        res.status(200).json(workouts);   
    } catch (err) {
        res.status(500).json(err);
      }
})  


module.exports = router;