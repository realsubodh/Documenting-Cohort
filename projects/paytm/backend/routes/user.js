const express = require("express")
const router = express.Router()
const zod = require("zod")
const { User } = require("../db")

//signup route | zod validation
const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
router.post("/signup",(req,res) => {
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
})

module.exports = router