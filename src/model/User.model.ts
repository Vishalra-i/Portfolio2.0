import bcrypt from 'bcrypt'
import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document{
    name: string;
    email: string;
    password: string;
    role: string;
    matchPassword(enteredPassword: string): Promise<boolean>;
    isAdmin(): boolean;
}

const UserSchema : Schema<User> = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type : String ,
        required : [true , "Email is required"],
        unique : true ,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password:{
        type : String ,
        required : [true , "Password is required"]
    },
    role:{
        type:String,
        default : 'USER',
    }
},{
        timestamps : true  
}
)

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)
})

UserSchema.methods.matchPassword = async function(enteredPassword){
    return await enteredPassword === this.password
}

UserSchema.methods.isAdmin = function(){
    return this.role === 'ADMIN'
}


const UserModel = (mongoose.models.User) || mongoose.model("User" , UserSchema)
export default UserModel ;