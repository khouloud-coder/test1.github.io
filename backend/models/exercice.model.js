const mongoose= require('mongoose');

const Shema= mongoose.Schema;
const exerciceShema = new Shema({
username:{
    type: String,
    required : true,},
description:{
    type:String ,required:true
},
duration:{type:Number , required:true},
dtae:{type:Date , required:true}
},


{
    timestamps:true,
});
const Exercice= mongoose.model('User', userShema);
module.exports = Exercice;