const router = require("express").Router();
const knex = require("./database");

router.post('/registration',(req,res) => {
    console.log(req.body)
    if (req.body.username !== undefined && req.body.email !== undefined && req.body.password !== undefined) {
        knex.select("*").from("users").where({"email":req.body.email})
        .then((data)=>{
            console.log("sandhya")
            console.log(data,"data1")
            console.log(data.length)
            if(data.length<1){
                knex("users").insert({
                    username:req.body.username,
                    email:req.body.email,
                    password:req.body.password
                }).then((data)=>{
                    console.log(data,"data2")
                    res.send({'massage':'data insert'})
                }).catch((err)=>{
                    console.log(err)
                    res.send(err.massage)
                })
            }else{
                res.send({'massage':"data already exist"})
            }
        })
    }else{
        res.send({"Error":"Please Fill Information In Body"});
    }
})
router.post('/login',(req,res) => {
    console.log(req.body)
    if (req.body.email !== undefined) {
        knex.select("*").from("users").where({"email":req.body.email})
        .then((data)=>{
            console.log(data,"data1")
            console.log(data.length)
            if(data.length>0){
                res.send({"Success":"Login Successfully"})
            }else{
                res.send({'Error':"This User Not Exists Please Signup"})
            }
        })
    }else{
        res.send({"Error":"Please Fill Information In Body"});
    }
})

module.exports = router 