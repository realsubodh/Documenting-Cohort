const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic 
    const username = req.body.username;
    const password = req.body.password;

    // check if a admin with this username already exists
    await Admin.create({
        username:username,
        password:password
    })
        res.json({
            message: 'Admin created successfully'
        })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
     const title = req.body.title;
     const description = req.body.description;
     const imageLink = req.body.imageLink;
     const price = req.body.price;
     // make sure to use zod for some sort of input validation
     // you have to use async/await because you have to wait until the user creates the entry so that you can return the id.
     const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
     })
    res.json({
        message:"course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses:response
    })
});

module.exports = router;