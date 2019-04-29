const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
//EgDQ6gidVdo7g5e6
mongoose.connect("mongodb+srv://vish:EgDQ6gidVdo7g5e6@cluster0-zzorc.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true })
.then(()=>{
    console.log('Connected to the database!')
})
.catch(()=>{
    console.log('Connection failed!'); 
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,OPTIONS,PUT')
    next();
});

app.use('/adminDash/cakes',(req,res,next)=>{
    const cakes=[
        {
        name:'Test Cake',
        category:'birthday',
        price:1200,
        imagePath:'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg',
        description:'This is some test description bjdjbxhbxh ',
        features:[{feature:'ghghgj'},{feature:'ghghjjjj'}]
        },
        {
            name:'Test Cake1',
            category:'birthday',
            price:1200,
            imagePath:'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg',
            description:'This is some test description bjdjbxhbxh '
        
            }
    ];
    res.status(200).json({
        message:'Cakes fetched successfully!',
        cakes: cakes
    });
});

module.exports=app;