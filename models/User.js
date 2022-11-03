const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    first_name:{
        type:string,
        required:true
    },
    last_name:{
        type:string,
        required:true
    },
    username:{
        type:string,
        required:true,
        unique:true
    },
    email:{
        type:string,
        required:true,
        unique:true   
    },
    password:{
        type:string,
        required:true,
        unique:true
    },
});

module.exports = mongoose.model("User", UserSchema)