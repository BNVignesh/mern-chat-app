import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
export const loginuser = async (req, res) => {
    
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: "Invalid login credentials" });
        }

        const ispasscorrect = await bcrypt.compare(password, user.password);

        if (!ispasscorrect) {
            return res.status(400).json({ error: "Invalid login credentials" });
        }
        generateToken(user._id, res);
        res.status(200).json({
            fullname: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
            _id:user._id
        });
        
    } catch (error) {
        console.log("error in login controller :", error);
        res.status(500).json({ error: "internal server error" });
    }




}

export const logoutuser = (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict'
        });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "passwords does not match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "user already exists" });
        }
        const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const salt = await bycrypt.genSalt(10);
        const hashedpassword = await bycrypt.hash(password, salt);
        const newUser = new User(
            {
                fullName,
                username,
                password: hashedpassword,
                gender,
                profilePic: gender === 'male' ? boypic : girlpic
            }
        )
        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilepic: newUser.profilePic

            })
        } else {
            res.status(400).json({ error: "invalid user data" });
        }


    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ error: "internal server error" })
    }


}