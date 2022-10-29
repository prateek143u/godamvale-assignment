const express=require('express');
const connection=require('./connection')
const productRoute=require('./routes/product')
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use('/product',productRoute)
const swaggerUl=require('swagger-ui-express')
const swaggerJsDoc=require('swagger-jsdoc')
const option ={
    definition: {
        openapi :'3.0.0',
        info: {
            title: 'Node is api from sql',
            version:'1.0.0'

        },
        server:[
            {
                url:'http://localhost:3001'
            }
        ]

    },
    apis:['product.js']
}
const swaggerSpec=swaggerJsDoc(option)
app.use('/api-doc',swaggerUl.serve,swaggerUl.setup(swaggerSpec))
app.use('/',(req,res)=>{
    res.send('skhxuyx')
})

module.exports=app;