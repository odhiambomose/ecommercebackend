const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
ordername:{type:String,required:true},
orderquantity:{type:Number,required:true},
ordersize:{type:Array,required:true},
orderprice:{type:Number,required:true},
ordercolors:{type:Array,required:true},



},
{timestamps:true}
)
module.exports=mongoose.model("Order", orderSchema)