const express = require("express")
const router = express.Router()
const zod = require("zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const { User } = require("../db")

//signup route | zod validation
const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
router.post("/signup", async(req,res) => {
    const body = req.body
    const {success} = signupSchema.safeParse(req.body)
    if(!success){
        return res.json({
            message: "email already taken/incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if(user.id){
        return res.json({
            message: "email already taken/ incorrect inputs"
        })
    }
    const dbUser = await User.create(body)
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "user created successfully!",
        token: token
    })
})

// creating the signin end point
// first define the zod validation
const signinSchema = zod.object({
    username: zod.string.email(),
    password: zod.string()
})

router.post("/signin", async(req,res)=>{
    const body = req.body;
    const {success} = signinSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message:"email already taken/invalid authentication"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password:req.body.password
    })

    if(user){
        const token= jwt.sign({
            userId: user._id
        }, JWT_SECRET)
        return
    }
    res.status(411).json({
        message: "error while logging in!!"
    })
})
module.exports = router