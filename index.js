const express=require('express');
const joi=require('joi');
const app=express();

var PORT=process.env.PORT ||7000;

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

    const condtn={
        topic:joi.string().min(3).required(),
        status:joi.string().min(3).required()
    };

    const result=joi.validate(req.body,condtn);

    if(result.error){
        res.send(result.error.details[0].message);
    }

    const pdata={
        id : data.length + 1,
        topic : req.body.topic,
        status : req.body.status
    };

    data.push(pdata);
    res.send(data);

});




app.listen(PORT,()=>console.log('Listening...'));