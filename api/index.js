const express = require('express');
const app = express();
const mongoose =require('mongoose');
const cors =require('cors');
const bodyParser =require('body-parser');
const Jwt = require('jsonwebtoken');
const PORT =8000;
const crypto =require('crypto');
const User = require('./models/User');
const customMiddleware = require('./middleware');



app.use(cors());

const generateSecretKey= ()=>{
    const key = crypto.randomBytes(32).toString('hex');
    return key;
}
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const secretKey = generateSecretKey();

//Connect MongoDB to your account , replace email id and password .

mongoose.connect('mongodb+srv://"YOUR EMAIL ID HERE":"YOUR PASSWORD HERE"@cluster0.ijjfdsm.mongodb.net/project1').then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Error connecting to MongoDB");
})

app.use(customMiddleware.newRequests)

app.listen(PORT,()=>{
    console.log("Server is running on PORT:",PORT)
})

app.post('/signup',async(req,res)=>{
    try {
        const {name,email,country,age,password} = req.body;
        const user = await User.findOne({email});
        if(user){
           return res.status(400).json({message:'User already exist'}); 
        }
        const newUser = new User({name,email,country,age,password});
            await newUser.save();
        res.json({message:"User Created !"});

        
    } catch (error) {
        console.log("Error in Singup:" ,error);
    }


})

app.post('/login',async(req,res)=>{

    try {
        const {email,password} = req.body;
       
        const user = await User.findOne({email});
        
        if(!user){
           return res.status(404).json({message:'User not found'}); 
        }

        if(user.password!==password){
            console.log("INVALID PASSWORD")
            return res.status(401).json({message:'Invalid Password'})
         }
        
        const token = Jwt.sign({userId:user._id},secretKey);
        user.password =undefined;
        res.status(200).json({message:"User Logged In !",token,user});

        
    } catch (error) {
        console.log("Error in Singup:" ,error);
    }


})


app.put('/user/:id',async(req,res)=>{

    try {
        
        const token = req.header('Authorization');
        

        Jwt.verify(token,secretKey,(err,valid)=>{
            if(err){
                res.status(401).send({result:"Please provide valid token"})
                console.log("Error::::",err);
                return;
            }
        })
        
        
        const user = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        
        if(!user){
           return res.status(404).json({message:'User not found'}); 
        }
        user.password =undefined;
        return res.status(200).json({message:'Record Updated',user})
        

    } catch (error) {
        console.log(error);
    }
})






app.delete('/user/:id',async(req,res)=>{

    try {
        
        const token = req.header('Authorization');
        

         Jwt.verify(token,secretKey,async (err,valid)=>{
            if(err){
                res.status(401).send({result:"Please provide valid token"})
                console.log("Error::::",err);
                return;
            }
            const user = await User.findByIdAndDelete(req.params.id);
        
            if(!user){
            return res.status(404).json({message:'User not found'}); 
            }
            user.password =undefined;
            return res.status(200).json({message:'User Deleted',user});
        })
        
        
        
        
        

    } catch (error) {
        console.log(error);
    }
})
