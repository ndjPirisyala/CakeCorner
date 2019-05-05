const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Cake=require('./models/cake'); 
const app=express();
//EgDQ6gidVdo7g5e6
mongoose.connect("mongodb+srv://vish:EgDQ6gidVdo7g5e6@cluster0-zzorc.mongodb.net/cakeCorner?retryWrites=true",{ useNewUrlParser: true })
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
app.post('/api/cakes',(req,res,next)=>{
    const cake=new Cake({
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        imagePath:req.body.imagePath,
        description:req.body.description,
        features:req.body.features
    });
    cake.save().then(result=>{
        res.status(201).json({
            message:'Cake added successfully',
            cakeId:result._id
        });
    });
   
});

app.delete("/api/cakes/:id",(req,res,next)=>{
    // console.log(req.params.id);
     Cake.deleteOne({_id:req.params.id}).then(result=>{
         console.log(result);
         res.status(200).json({
             message:'Cake deleted'
         });
     });
 });

app.put("/api/cakes/:id",(req,res,next)=>{
    const cake=new Cake({
        _id:req.body.id,
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        imagePath:req.body.imagePath,
        description:req.body.description,
        features:req.body.features
    });
    Cake.updateOne({_id:req.params.id},cake).then(result=>{
        res.status(200).json({message:"Update successful!"});
    });
});
app.get("/api/cakes",(req,res,next)=>{
    Cake.find().then(documents=>{
        res.status(200).json({
            message:"Cakes fetched successfully",
            cakes:documents
        });
    });
   
});



// app.get("api/cakes/:id",(req,res,next)=>{
//     Cake.findById(req.params.id).then(cake=>{
//         if(cake){
//             res.status(200).json(cake);
//         }else{
//             res.status(404).json({message:'Cake not found!'})
//         }
//         });
//     })
   


module.exports=app;