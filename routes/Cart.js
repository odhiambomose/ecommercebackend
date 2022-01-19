const Cart=require("../models/Cart")
const router=require("express").Router();
const {verifyTokenAndAdmin}=require("./verifyToken")
const {verifyTokenAndAuthorization}=require("./verifyToken")


router.post("/addCart",async(req,res)=>{
const newCart=new Cart({
    image:req.body.image,
cartname:req.body.cartname,
quantity:req.body.quantity,
size:req.body.size,
price:req.body.price,
colors:req.body.colors

})


try{
    const savedCart=await newCart.save()
    res.status(201).json(savedCart)
}catch(err){
    res.status(404).json(err)
}

})
//update
router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
    try{
    const id=req.params.id
    const updates=req.body
    const options={new:true}
    const updatedCart= await Cart.findByIdAndUpdate(id,updates,options)
    res.status(200).json(updatedCart)
    }
    catch(err){
        res.status(500).json(err)
    
    }
    
    })

    //delete user

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("product succesfully deleted")
return await Cart.findByIdAndDelete(req.params.id)


    }
    catch(err){
        res.status(404).json("record not found")

    }

    
})

//find by id
    
router.get("/find/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try{
const cart = await Cart.findById(req.params.id)
res.status(200).json(cart)
    }
    catch(err){
res.json(err)
    }
})

//find all
router.get("/",verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const cart=await Cart.find()
        res.status(200).json(cart)
    }
    catch(err){
        res.status(404).json(err)
    }
})

module.exports=router