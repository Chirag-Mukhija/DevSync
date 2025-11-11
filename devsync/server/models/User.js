import mongoose from 'mongoose' ;
const schema = mongoose.Schema ;

const userSchema = new schema({
    uid : String ,
    name : { type : String , required : true } ,
    email : {type : String , required : true , unique : true } ,
    picture : String ,
})

const User = mongoose.model('User',userSchema);
export default User ;