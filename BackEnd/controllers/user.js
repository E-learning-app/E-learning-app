const db = require("../Database/index");
const bcrypt =require("bcrypt")

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
    //still need 
    addUser :async (req,res)=>{
        const {firstName , lastName , email , password}= req.body
        try{
            const resp = await db.User.create({firstName:firstName,lastName:lastName,email:email,password})
            res.status(200).json(resp)

        }catch(err){
            res.status(500).send(err)
        }
    }
}