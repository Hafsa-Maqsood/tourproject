import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// user registration
export const register = async (req, res) => {
    try {
        // Assuming you're using email for registration, make sure to match the model fields
        const newUser = new User({
            username: req.body.username, // Assuming you're using username for registration
            email: req.body.email,       // Email must also be passed as req.body.email
            password: req.body.password,
            photo: req.body.photo,
        });

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        await newUser.save();
        res.status(200).json({ success: true, message: "Successfully created" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Fail to create. Try again" });
    }
};

// user login
export const login = async (req, res) => {
    try {
        // Find user by email
        const user = await User.findOne({ email: req.body.email });

        // If user doesn't exist
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const { password, role, ...rest } = user._doc;

        // Create JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        );

        // Set token in cookies
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days expiration
        })
        .status(200)
        .json({
            token,
            data: { ...rest },
            role,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Login" });
    }
};
