const express=require("express")
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  // res.send("Hello world")
  res.sendFile(__dirname + "/index.html");
})


app.post("/",function(req,res){
  // console.log(req.body)
  var num1=Number(req.body.w)
  var num2=Number(req.body.h)
  var result=num1+num2
  res.send("The result you got :"+ result)
})



app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator",function(req,res){
  var num1=parseFloat(req.body.w);
  var num2 =parseFloat(req.body.h);
  var result=num1/(num2*num2)
  res.send("Your BMi is "+ result)
})


app.listen(3000,function(){
  console.log("server is running on port 8000")
})
