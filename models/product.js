const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
image:{type:String,unique:true,required:true},
name:{type:String,unique:true,required:true},
description:{type:String,required:true},
price:{type:Number,required:true},
size:{type:Array,required:true,},
colors:{type:Array,required:true},



},
{timestamps:true}
)
module.exports=mongoose.model("Product",productSchema)