const mongoose = require('mongoose')


const MONGO_URL = process.env.MONGO_URL
const connect = async ()=>{
    try{
       await mongoose.connect(MONGO_URL, 
            (err)=>{
                if(err) throw err;
                console.log('DB: connction success!');
                mongoose.connection.readyState
            })

    }catch (err){
        console.log('DB Error : ', err);
    }
}

module.exports = {connect}