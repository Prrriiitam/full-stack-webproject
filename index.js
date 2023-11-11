const express= require("express")

// import express from "express";
const app=express();
const port=process.env.PORT || 8000;

//Public static path

const path=require("path");
const hbs=require('hbs');
const staticpath=path.join(__dirname,"/public");
const temp_path=path.join(__dirname,"/templates/views");
const partials_path=path.join(__dirname,"/templates/partials");


app.set('view engine','hbs')
app.set('views',temp_path);
app.use(express.static(staticpath));
hbs.registerPartials(partials_path);
//Routing

app.get("/", (req, res)=>{
    res.render("index")
});
app.get("/about", (req, res)=>{
    res.render('about')
});
app.get("/weather", (req, res)=>{
    res.render('weather')
});
app.get("*", (req, res)=>{
    res.render('404',{
        errMsg: 'Oops! Page Not Found'
    })
});
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})
