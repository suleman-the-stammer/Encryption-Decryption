const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/' , function(req ,res){

    // ---- Generating Salt String -----
    // bcrypt.genSalt(10, function(err, salt){
    //     bcrypt.hash("kiabaatha" , salt , function(err, hash){
    //         console.log(hash)
    //     })
    // })

     // ---- Putting Salted String -----
    // bcrypt.compare("kiabaatha" , "$2b$10$SUD0D5yX.2A/3p3/r2SyPe3AUgnM4B4veGL8mXgVR2ypzvnZvCCle", function(err, result){
    //     console.log(result)
    // })
   let token = jwt.sign({email: "stammer786@gmail.com"} , "ourSecretKey"); // Saving Email into Cookie
   res.cookie("token" , token); // Saving Data in Cookies
   res.send("DOne");
})

app.get('/read' , function(req, res){
    let data = jwt.verify(req.cookies.token , "ourSecretKey")
    res.send(data);
})



app.listen(3000);