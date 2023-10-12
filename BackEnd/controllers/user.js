const db = require("../Database/index");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config();
module.exports ={
    getAllUsers :async(req,res)=>{
     
        try{
            const allUsers = await db.User.findAll();
            res.status(200).json(allUsers)
        }catch(err){
            console.log(err)
            res.status(500).send(err)
        }
    },
    
    addUser :async (req,res)=>{
        const {firstName , lastName , email , password}= req.body
        try{
            const hash =await bcrypt.hash(password,10)
            const resp =await db.User.create({firstName:firstName , lastName:lastName ,email:email,password:hash ,role:"user"})
            res.status(200).json(resp)
            // resp.send(hash)
        }catch(err){
            res.status(500).send(err)
        }
    }, 



    logUser : async(req,res)=>{
        const {email , password}=req.body
        const user = await db.User.findOne({where :{email}})
        
     
        if(user){
            // console.log(password,user.password);
            const valid_password= await bcrypt.compare(password,user.password)
            console.log(valid_password);
            if(valid_password){
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    role: user.role,
                  }, process.env.jwt_SECRET);
                res.json({message:"Welcome Back",token:token})
            }else {
                res.status(400).json({ error : "Password Incorrect" });
            }
        }else {
            
            res.status(404).json({ error : "User does not exist" });
        }
    },



}