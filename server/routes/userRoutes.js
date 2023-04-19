const express = require('express');
const router = express.Router();
const {createUser,login,tokenIsValid,fetchUser,user,getUsers} =  require('../userController/userController');
const {auth} = require('../middleware/auth.js')

router.get('/',auth, getUsers);
router.post('/createUser', createUser);
router.post('/login', login);
router.post('/tokenIsValid', tokenIsValid);
router.get('/fetchUser/:id',auth, fetchUser);
router.get('/user',auth, user);


module.exports = router;
