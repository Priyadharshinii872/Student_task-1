const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({
    rollno:{
        type:Number
    },
    name:{
        type:String
    },
    class:{
        type:String
    },
    section:{
        type:String
    }
})

module.exports = studentschema