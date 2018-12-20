const express=require('express');
const app=express();

app.get('/myapi',(req,res)=>{
    res.send('Hello Aishu');
});

app.get('/myapi/:id/:topic/:status',(req,res)=>{
    res.send(req.params);
});

app.listen(7000,()=>console.log('Listening...'));