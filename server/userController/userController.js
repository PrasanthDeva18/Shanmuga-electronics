const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



//signup user
exports.createUser = async (req, res) => {
    let { name, email, password, cnfmpass } = req.body;


    if (!name || !email || !password || !cnfmpass)
        return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password !== cnfmpass)
        return res.status(400).json({ msg: "Passwords doesn't match." });
    if (password.length < 6)
        return res.status(400).json({ msg: "The password needs to be atleast 6 characters long." });


    const existingUser = await userModel.findOne({ email: email });
    if (existingUser)
        return res.status(400).json({ msg: "An account with this email already exists." });
    const salt = await bcrypt.genSalt();
    const user = req.body;
    let hashpassword = req.body.password;
    hashpassword = await bcrypt.hash(hashpassword, salt);
    req.body.password = hashpassword;

    const newUser = new userModel(user);
    try {
        await newUser.save();
        const user = await userModel.findById(newUser._id);
        const JWT_SECRET = 'prasanth';
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET);

        res.status(201).json([
            {
                token: token,
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
        ]);
    } catch (error) {
        res.status(409).json({ message: error });

    }

}


//LOGIN USER
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let role;
        //validate 
        if (!email || !password)
            return res.status(400).json({ msg: "Not all fields have been entered." });
        const user = await userModel.findOne({ email: email });
        if (!user)
            return res.status(400).json({ msg: "No account with this email has been registered." });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials." });
        const JWT_SECRET = 'prasanth';
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.status(200).json([
            {
                token: token,
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
        ])
    } catch (error) {
        res.status(409).json({ message: error });

    }
}

//token validation
exports.tokenIsValid = async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token)
            return res.json(false);
        const JWT_SECRET = 'prasanth';
        const verifiedToken = jwt.verify(token, JWT_SECRET);
        if (!verifiedToken)
            return res.json(false);
        const user = await userModel.findById(verifiedToken.id);
        if (!user)
            return res.json(false);
        return res.json(true);


    } catch (error) {
        res.status(409).json({ message: error });

    }
}
exports.fetchUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
          const user = await userModel.findById(_id);
          const JWT_SECRET = 'prasanth';
          const token = jwt.sign({ id:_id }, JWT_SECRET);
          res.status(200).json([
                {
                    token: token,
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
          ]);
         
    } catch (error) {
        
        res.status(404).json({ message: error });
    }
     
 }

//get logged in user
exports.user = async (req, res) => {
    const user = await userModel.findById(req.user);
    res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    });
}
//delete user
exports.deleteUser =  async  (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.user);
        res.json(deleteUser);
    } catch (error) {
       res.status(409).json({ message: error});
        
    }
}

exports.getUsers = async (req, res) => {
    try {
          const users = await userModel.find();
          res.status(200).json(users);
         
    } catch (error) {
        res.status(404).json({ message: error });
    }
     
 }