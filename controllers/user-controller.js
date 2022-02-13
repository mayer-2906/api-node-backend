const {response} = require('express')
const bcrypt = require('bcryptjs');

const User = require('../models/user')

const getUsers = async (resq,res=response) => {

  try{
    const users = await User.find({}, 'name email rol age' );
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

      //encript password
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync( password, salt );

      //save user
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

const updateUser = async (req, resp=response) => {

  const uid=req.params.id

  try{
    const user = await User.findById(uid)
    if(!user){
      return resp.status(404).json({
        ok:false,
        message:"user not exits"
      })
    }

    const {password, email,...fieldUpdate} = req.body;
    if(user.email !== email){     
      const isExistEmail= await User.findOne({email:req.body.email})
      if(isExistEmail){
        return resp.status(500).json({
          ok:false,
          message: "email belongs to another user"
        })
      }
    }

    fieldUpdate.email=email;

    const userUpdate = await User.findByIdAndUpdate(uid,fieldUpdate,{new:true});
    
    resp.json({
      ok:200,
      userUpdate
    })
  }catch(e){
    resp.status(500).json({
      ok:false,
      message: "connection failed",
      errors: e.message
    })
  }
  
}

const deleteUser = async (req, resp=response) => {
  const uid = req.params.id;
  try{    
    const user = await User.findById(uid);
    if(!user){
      return resp.status(500).json({
        ok:false,
        message: "user does not exits"
      })
    }
    await User.findByIdAndDelete(uid)
    resp.json({
      ok:true,
      message:"delete user"
    }) 
  }catch(e){
    resp.status(500).json({
      ok:false,
      message:`talk with admin`
    }) 
  }
}

module.exports = { 
  getUsers,
  createUser,
  updateUser,
  deleteUser
}