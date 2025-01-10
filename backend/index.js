const express = require("express");
const cors = require("cors");
const app= express();
const options = {origin:"*"}
app.use(cors(options));
app.use(express.json());

let studentData= [
    {
    name:"Soudarya",
    age: 19,
}];
app.post('/',(req,res) => {
    studentData.push(req.body);
    console.log(req.body);
    res.send("Done")
})
const data=["hello",123,{"key":"value"}];
app.get('/',(req,res)=>{
    res.send(data)
})
app.get('/student',(req,res)=>{
    res.send(studentData)
})

app.listen(3333,()=>{
    console.log("started")
})