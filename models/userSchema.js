const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    namee:{
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    }
})

const User=mongoose.model('USER',userSchema);

module.exports=User;