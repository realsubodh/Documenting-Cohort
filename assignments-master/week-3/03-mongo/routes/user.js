const { Router } = require("express");
const router = Router();
const {User, Course} = require("../db")
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    // check if a user with this username already exists
    await User.create({
        username:username,
        password:password
    })
        res.json({
            message: 'User created successfully'
        })
});

// it is the open endpoint, which means user can see all the published courses
router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses:response
    })
});

// here basically we have to update the data in the MongoDb
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});
module.exports = router