
const express = require("express");
const app = express();
const port = 8000;
const user = require("./router")
const db= require("./database")

app.use(express.json());
app.use(user);
app.use(db);

app.listen(port,()=>{
    console.log(`sever is runing on port ${port}`)
})