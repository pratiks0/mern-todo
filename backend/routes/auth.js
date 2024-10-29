const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");


//sign up
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashedPassword });
        await user.save();
        res.status(200).json({ user });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error code for MongoDB
            res.status(400).json({ message: "User Already Exists" });
        } else {
            res.status(500).json({ message: "Server Error", error: error.message });
        }
    }
});


//sign in 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others })
    } catch (error) {
        return res.status(400).json({ message: "user already exists" });
    }
})

module.exports = router;