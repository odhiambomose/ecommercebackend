const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    image:{type:String,unique:true,required:true},
cartname:{type:String,unique:true,required:true},
quantity:{type:String,required:true},
size:{type:Array,required:true},
price:{type:Number,required:true},
colors:{type:Array,unique:true,required:true},



},
{timestamps:true}
)
module.exports=mongoose.model("Cart",productSchema)