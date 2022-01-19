const product = require("../models/product");
const Product=require("../models/product")
const router=require("express").Router();
const {verifyTokenAndAdmin}=require("./verifyToken")
const {verifyTokenAndAuthorization}=require("./verifyToken")

router.post("/new",async(req,res)=>{
const newProduct=new Product({
image:req.body.image,
name:req.body.name,
description:req.body.description,
price:req.body.price,
size:req.body.size,
colors:req.body.colors

})


try{
    const savedProduct=await newProduct.save()
    res.status(201).json(savedProduct)
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
    const updatedProduct= await Product.findByIdAndUpdate(id,updates,options)
    res.status(200).json(updatedProduct)
    }
    catch(err){
        res.status(500).json(err)
    
    }
    
    })

    //delete user

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("product succesfully deleted")
return await Product.findByIdAndDelete(req.params.id)


    }
    catch(err){
        res.status(404).json("record not found")

    }

    
})

//find by id
    
router.get("/find/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try{
const product = await Product.findById(req.params.id)
res.status(200).json(product)
    }
    catch(err){
res.json(err)
    }
})

//find all
router.get("/",verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const product=await Product.find()
        res.status(200).json(product)
    }
    catch(err){
        res.status(404).json(err)
    }
})


module.exports=router