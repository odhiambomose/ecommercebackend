const Order=require("../models/Order")
const router=require("express").Router();


router.post("/addOrder",async(req,res)=>{
const newOrder=new Order({
ordername:req.body.ordername,
orderquantity:req.body.orderquantity,
ordersize:req.body.ordersize,
orderprice:req.body.orderprice,
ordercolors:req.body.ordercolors

})


try{
    const savedOrder=await newOrder.save()
    res.status(201).json(savedOrder)
}catch(err){
    res.status(404).json(err)
}

})
module.exports=router