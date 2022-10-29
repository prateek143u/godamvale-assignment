const { query } = require('express');
const express=require('express');
const connection=require('../connection')
const router=express.Router();

router.post('/create',(req,res,next)=>{
    let product=req.body;
    query="INSERT INTO product (id,name,sku ,brand,category,manufacturer,hsnCode,weight,dimension) values(?,?,?,?,?,?,?,?,?)";
    connection.query(query,[product.id,product.name,product.sku ,product.brand,product.category,product.manufacturer,product.hsnCode,product.weight,product.dimension],(err,results)=>{
        if(!err){
            return res.status().json({meaasge: "product add sucessfully"})
           
        }else{
            return res.status(500).json(err);
        }
    })
    // res.send('vekljvy')
})


router.get('/read',(req,res,next)=>{
  var  query="select *from product";
   connection.query(query,(err,result)=>{
    if(!err){
       return res.status(200).json(result);

    }else{
        return res.status(500).json(err);
    }
   })
})

router.patch('/update/:id',(req,res,next)=>{
    const id=req.params.id;
    let product=req.body;
    var query="update product set name=?,sku=? ,brand=?,category=?,manufacturer=?,hsnCode=?,weight=?,dimension=? where id=?"
    connection.query(query,[product.name,product.sku ,product.brand,product.category,product.manufacturer,product.hsnCode,product.weight,product.dimension],(err,results)=>{
        if(!err){
            if(results.affectedRows==0){
                return res.status(404).json({message: "product id not found"})
                
            }else{
                return res.status(200).json({message: "product updated"})
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})
router.delete('/delete/:id',(req,res,next)=>{
    const id=req.params.id;
    var query="delete from product where id=?"
    connection.query(query,[id],(err,result)=>{
        if(!err){
            if(result.affectedRows==0){
                return res.status(404).json({message: "product id not found"})

            }else{
                return res.status(200).json({message: "product deleted"})

            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})
module.exports=router;