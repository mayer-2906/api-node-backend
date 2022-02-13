const {response} = require('express')

const User = require('../models/user')

const getUsers = async (resq,res=response) => {

  try{
    const users = await User.find({}, 'name email rol' );
    console.log();
    res.json({
      ok:200,
      users
    })
  }catch(e){
    res.json({
      ok:400,
      msg:e.message,
    })
  }
  
}

const createUser = async (req, res=response) => {


  try {
    const { name, password, email } = req.body

    const isUserExist = await User.findOne({email})

    if(isUserExist){
      console.log(isUserExist);
      res.status(500).json({
        ok:500,
        message: "user Exist"
      })
    }else{
      const user = new User(req.body);

      await user.save();
      
      res.json({
        ok:200,
        msg:"user create",
        user
      })
    }  
  }catch(e){
    res.json({
      ok:400,
      msg:"Error of create user",
      error: e.message
    })
  }
  
}

module.exports = { 
  getUsers,
  createUser
}