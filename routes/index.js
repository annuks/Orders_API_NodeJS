const router = require('express').Router();
const passport = require('passport');
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController')

router.post('/add-user',userController.addUser);
router.post('/login-user', userController.login);
router.post('/add-order',passport.authenticate('jwt', { session: false }),orderController.addOrder);
router.get('/get-order',passport.authenticate('jwt', { session: false }),orderController.getOrder);
module.exports=router;
