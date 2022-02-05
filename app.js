const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.set('view engine','ejs');

var items=["TCS","Infosys","STEP Microsoft Internship"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    let today=new Date();
     let options={
         weekday:"long",
         month:"long",
         day:"numeric",
         year:"numeric"
     }
     let day=today.toLocaleDateString("en-US",options);
    /*var day="";
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day=days[today.getDate()+1];*/
   /* if(today.getDate()===0||today.getDate()===6){
        
    res.render("list",{kindofday:day});
     } else{*/
        res.render("list",{kindofday:day,newListItem:items});
    
});

app.post("/",function(req,res){
    item=req.body.newItem;
    items.push(item);
    res.redirect("/");

})

app.listen(3000,function(){
    console.log("server is started on port number 3000");
});