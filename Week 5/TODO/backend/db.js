/* creating a mongoose shema like this
    Todo{
    title:string,
    description:string,
    completed: boolean
    }
*/


const mongoose = require("mongoose")
mongoose.connect("your url")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema)
module.exports ={
    todo
}