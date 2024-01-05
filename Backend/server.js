const app = require("./app");
const dotenv=require("dotenv")
const path=require('path')
const dbconnection=require('./configs/dbconnection')
dotenv.config({path:path.join(__dirname,"config/config.env")})
dbconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Server Running ${process.env.PORT} in ${process.env.NODE_ENV}`)
})