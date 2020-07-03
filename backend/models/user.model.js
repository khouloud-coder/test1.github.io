const mongoose= require('mongoose');

const Shema= mongoose.Schema;
const userShema = new Shema({
username:{
    type: String,
    required : true,
    unique: true,
    trim: true,
    minlength:3
},

},
{
    timestamps:true,
});
const User= mongoose.model('User', userShema);
module.exports = User;