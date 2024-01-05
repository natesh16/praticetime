const mongooes=require('mongoose');
const connection=()=>{
    mongooes.connect(process.env.LOCAL_DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Mongodb is connected to the host ${con.connection.host}`)
    }).catch(err=>{
        console.log(err)
    })
}
module.exports=connection;