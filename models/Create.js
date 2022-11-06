const mongoose = require("mongoose")



const CreateSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true,
        unique:true
    },
    description: {
        type:string,
        required:true,
        unique:true
    },
    author: {
        type:string,
        required:true,
        unique:true
    },
    tags:{
        type:Array,
        required:false
    },
    body:{
        type: string,
        required: true
    },
    state: {
        type:string,
        enum:["draft", "published"], default: "draft"
    },
    read_count:{
        type:Number, 
    },
    read_time: {
        type: Number,
    },
    timestamps: true
});
    

module.exports = mongoose.model("Create", CreateSchema)