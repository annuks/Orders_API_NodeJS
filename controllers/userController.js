const User = require('../models/User');

//using jwt for login authentication
const jwt = require("jsonwebtoken");


module.exports.addUser = async (req, res) => {
    try {
      
        const user = await User.create({
          name:req.body.name,
          phone:req.body.phone,
          password:req.body.password
        });
      
        user.save();
        return res.json(200, {
          message: "User Added Succesfully",
          success: true,
        });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        success: false,
        message: "Request Could Not Processed",
      });
    }
  };
  
  module.exports.login = async(req,res)=>{
    try{
        let user = await User.findOne({ phone:req.body.phone });
      if (!user || user.password != req.body.password) {
        return res.json(402, {
          message: "Login Details are Invalid ",
          success : false
        });
      }
  // if sign-in details are correct
      return res.json(200, {
        message: "Sign In Succesfull, Here is your Token",
        success: true,
        data: {
          token: jwt.sign(user.toJSON(), "vooshassignment", { expiresIn: "3600000" }),
        },
      });
    } catch (err) {
      console.log(" Error in JWT", err);
      return res.json(500, {
        message: "Internal Server error",
      });
    }
  };