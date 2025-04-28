const express = require("express")
const userRouter = ("./user")
const router = express.Router()

router.use("/user", userRouter)
module.exports = router;
// api/b1/user
// /api/v1/transactions ...