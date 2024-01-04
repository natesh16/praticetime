const server=require('./app');
const dotenv=require('dotenv');
const path=require("path");
dotenv.config({path:path.join(__dirname,"config/config.env")});

server.listen(process.env.PORT,()=>{
    console.log(`Server runnig in: ${process.env.PORT} in ${process.env.NODE}`)
});
