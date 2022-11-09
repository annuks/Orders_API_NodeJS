const Order = require('../models/Order');
const User = require('../models/User');
const passport = require("passport");
//using jwt for login authentication
const jwt = require("jsonwebtoken");

module.exports.addOrder = async (req, res) => {
    try {
        const order = await Order.create({
          userId:req.user._id,
          subTotal:req.body.subTotal,
          phone:req.user.phone,
        });
       order.save();
        return res.json(200, {
          message: "Order Created Succesfully",
          success: true,
        });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        success: false,
        message: "Order Could Not Processed",
      });
    }
  };
  module.exports.getOrder = async(req,res)=>{
    try{
    if(!req.query.user_id){
        return res.json(400, {
            message: "Enter User Id",
            success: false,
        });
    }
    const order= await Order.find({userId:req.query.user_id});
    if(order){
        return res.json(200, {
          message: "Order list Generated",
          success: true,
          data: {
            order
          },
        });
      }else{
          return res.json(400, {
              message: "Order Not Found",
              success: false,
            });
      }
  
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
          success: false,
          message: " *Internal Server Error- User id Not Found",
      });
    }
  };
  