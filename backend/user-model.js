const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    phone:{
        type:Number
    }
  });
  const User = mongoose.model('Person', userSchema);
  module.exports=User