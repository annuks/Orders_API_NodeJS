const router = require('express').Router();

router.get('/user',(req,res)=>{
    res.send("User Routes ");
})




module.exports=router;