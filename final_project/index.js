const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
    let token = req.header('Authorization');
    
    if (! token) return res.status(401).send({ message: "No token provided"});
    if (token.startsWith("Bearer ")) {
        tokenValue = token.slice(7, token.length).trimStart();
    }

    const verificationStatus = jwt.verify(tokenValue, "access");
    if (verificationStatus) next();
    else return res.status(403).send({ message: "Invalid token"});
});
 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running via port " + PORT));
