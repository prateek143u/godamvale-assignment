const e = require('express')
const mysql=require('mysql')
var connection=mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: "root",
    password: "123456",
    database: "crud"
})
connection.connect((err)=>{
    if(!err){
        console.log('connected')
    }else{
        console.log(err);
    }
})
module.exports=connection;