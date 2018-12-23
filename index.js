const express=require('express');
const app=express();

app.use(express.json());

const data=[
    {id:1, topic:'TheBoss', status:'completed' },
    {id:2, topic:'Virgin', status:'pending'}
]


app.get('/',(req,res)=>{
    res.send('Hello Aishu');
});

app.get('/myapi',(req,res)=>{
    res.send([a,b,c]);
})

app.get('/myapi/:id/:topic/:status',(req,res)=>{
    res.send(req.params);
});

app.get('/myapi/list',(req,res)=>{
    res.send(data);
});

app.get('/myapi/list/:id',(req,res)=>{
    const dataItem=data.find(q=>q.id===parseInt(req.params.id));
    if(!dataItem) res.status(404).send('not found');
    res.send(dataItem);
});

// app.get('/myapi/:id/:topic/:status',(req,res)=>{
//     res.send(req.query);
// });

app.post('/myapi/list',(req,res)=>{
    const pdata={
        id : data.length + 1,
        topic : req.body.topic,
        status : req.body.status
    };

    data.push(pdata);
    res.send(data);

});




app.listen(7000,()=>console.log('Listening...'));