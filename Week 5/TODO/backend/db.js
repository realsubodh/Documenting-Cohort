/* creating a mongoose shema like this
    Todo{
    title:string,
    description:string,
    completed: boolean
    }
*/


const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://subodhsingh3477:FridaY7880@cluster0.k5y3sbt.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema)
module.exports ={
    todo
}