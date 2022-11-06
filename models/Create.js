const mongoose = require("mongoose")



const CreateSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description: {
        type:String,
        required:true,
        unique:true
    },
    author: {
        type:String,
        required:true,
        unique:true
    },
    tags:{
        type:Array,
        required:false
    },
    body:{
        type: String,
        required: true
    },
    state: {
        type:String,
        enum:["draft", "published"], default: "draft"
    },
    read_count:{
        type:Number, 
    },
    read_time: {
        type: Number,
    },
},
    {timestamps: true}
);
    

module.exports = mongoose.model("Create", CreateSchema)