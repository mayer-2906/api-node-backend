const mongoose = require('mongoose')

const dbConection = async () => {
  try {  
    await mongoose.connect('mongodb+srv://admin_users:HbHMxbmSs2Fk9Aaz@cluster0.yznfd.mongodb.net/test',{
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    console.log("db online");
  
  }catch(e){
   console.log("Error of conection",e) 
  }
}

module.exports = {
  dbConection
}