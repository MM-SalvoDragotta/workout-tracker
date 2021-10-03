const router = require("express").Router();
const Workout  = require("../../models/Workout.js");

router.get("/range", async (req, res) => {
    try {
        const allWorkouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration'
                    },
                },
            },
            {
                $sort: { day: -1 }  
            },
            {
                $limit: 7
            },
        ]);
        res.status(200).json(allWorkouts)   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try{
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration'
                    },
                    totalWeight:
                    { $sum: '$exercises.weight' }
                },
            },
        ]);
        res.status(200).json(workouts);   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try{
        const workout = await Workout.findByIdAndUpdate(
        {
            _id: req.params.id,
        },
        { 
            $push: { exercises: req.body } 
        },
        { 
            new: true, 
            runValidators: true 
        }
        );
        if (!workout) {
            res.status(404).json(
              { message: `No workout with id ${req.params.id} found!` }
            );
            return;
          }
        
        res.status(200).json(workout);   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try{
    const workout = await Workout.create(req.body);
    res.status(200).json(workout);   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try{
        const workout = await Workout.findByIdAndRemove(
            {
                _id: req.params.id,
            }
        );
    res.status(200).json(workout);   
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;