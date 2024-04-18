require('dotenv').config()   // env file se agar kisi type ka sensitive data ko uske varaible ke naam se yaha is file me call karana ho to pahle is line ko likhna hoga aur (npm i dotenv)ye pahle karna hoga env ki file banane se pahle 
const express = require('express')  //import express done
const app = express()  // store express in (app) variable sothat we call (app) for performing express functions
const port = 5000

app.get('/', (req, res) => {   // app get request on (/)route and give response mean us page per as response (send karega ) (jo yaha se likh kar bhejenge )
  res.send('Hello World!')
})


// jitni baar ham nayi nayi (app.get) request banayenge utni baar hame server ko restart karna hoga (npm run dev) tabhi naya (get)request hamare port per show hoga nahi to nahi hoga 
app.listen(process.env.PORT, () => {    // aur ye request/response jo ham de pa rahe h uske liye ak port chahiye jaha ye sab kar paaye to uske liye ye line 
 //(process.env.PORT)hamne apni (env) file me (port) naam ke varaible me (port) specify kar rakha h ye waha se (port) lega
    console.log(`Example app listening on port ${process.env.PORT}`)
})


// yahi h poora express ki khaani jisme 2 cheeje hoti h request and response kis route per request maari aur us route per hame us request ka kya response mila isi ko kahte h server jo hamari request ko listen karke hame respond kare